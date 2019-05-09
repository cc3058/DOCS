const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
// Models
const User = require('./models/user')
users.use(cors())

// GET  - retrieve data from the server
// POST - send data to the server
// PUT  - update data in the server
// DELETE - delete data in the server

process.env.SECRET_KEY = 'secret'

//const AuthenticationController = require('./controllers/AuthenticationController.js')
//const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
module.exports = (app) => { app.post('/login',(req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        role: user.role
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    console.log(payload.role)
                    //res.send(token)
                    res.send(payload.role)
                } else {
                    res.json({ error: 'User does not exist' })
                    console.log('no existe 1')
                }
            } else {
                res.json({ error: 'User does not exist'})
                console.log('no existe 2')
            }
        })
        .catch(err => {
          console.log('Error 3')
            res.send('error: ' + err)
        })


},

app.post("/register", (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }
    console.log('entre')
    User.findOne({
        email: req.body.email
    })
        .then(user => {
          console.log(user)
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                          console.log('Se creo el usuario')
                            res.json({ status: user.email + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                            console.log('error 1')
                        })
                })
            } else {
                res.json({ error: 'User already exists' })
                console.log('error 2')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
            console.log('error 3')
        })
})

)
}

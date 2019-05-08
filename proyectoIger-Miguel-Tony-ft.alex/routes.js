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
                        role: user.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    console.loge('si existe')
                    res.send(token)
                } else {
                    res.json({ error: 'User does not exist' })
                    console.log('no existe 1')
                }
            } else {
                res.json({ error: 'User does not exist' })
                console.log('no existe 2')
            }
        })
        .catch(err => {
          console.log('Error 3')
            res.send('error: ' + err)
        })


}
)
}

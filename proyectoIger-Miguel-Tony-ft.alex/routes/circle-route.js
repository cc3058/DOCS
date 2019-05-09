const express = require('express');
const postRoutes = express.Router();

//circle model
let Post = require('../models/post-circle');

//route to save data
postRoutes.route('/add').post(function (req, res){
    let post = new Post(req.body);
    post.save()
        .then(() => {
            res.status(200).json({'business': 'business in added successfully'});
        })
        .catch(() =>{
            res.status(400).send("Failed to save");
        });    
    
});

//route to get data
postRoutes.route('/').get(function (req, res){
    Post.find(function(err, circulos){
        if(err){
            res.json(err);
        }
        else {
            res.json(circulos);
        }
    });
});


module.exports = postRoutes;
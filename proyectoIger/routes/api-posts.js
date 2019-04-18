const router = require('express').Router()
// Models
const Post = require('../models/post')
const User = require('../models/user')


// GET  - retrieve data from the server
// POST - send data to the server
// PUT  - update data in the server
// DELETE - delete data in the server

router.get('/', function(req, res, next) {
    let offset = Number(req.query.offset);
    let limit  = Number(req.query.limit);
    if (limit == 0) {
        limit = Number.MAX_SAFE_INTEGER;
    }
    Post.find({})
        .skip(offset)
        .limit(limit)
        .then((data) => {
        res.json(data)
    })
})


router.get('/:postId', function(req, res, next) {
    let id = req.params.postId
    Post.findById(id, function(err, data) {
        if (err || !data) {
            console.log(err)
            return;
        }
        res.json(data)
    })
})


router.post('/', function(req, res, next) {
    let post = new Post({
        title:   req.body.title,
        content: req.body.content
    })
    post.save(function(err, data) {
        if (err || !data) {
            console.log("ERROR:", err)
            res.json({error: err})
            return;
        }
        res.json(data)
    })
})


router.put('/:postId', function(req, res, next) {
    
    let id = req.params.postId
    Post.findByIdAndUpdate(id, {
        title:   req.body.title,
        content: req.body.content
    }, function(err, data) {
        if (err || !data) {
            console.log("ERROR:", err)
            res.json({error: err})
            return;
        }
        res.json(data)
    })
   
})


router.delete('/:postId', function(req, res, next) {
    // Database Operation: delete an existing post
    let id = req.params.postId
    Post.findByIdAndRemove(id, function(err, data) {
        if (err) {
            console.log("ERROR:", err)
            res.json({error: err})
            return;
        }
        res.json({error: false})
    })
})

module.exports = router;




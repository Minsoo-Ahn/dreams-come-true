var express = require('express');
var router = express.Router();

var Posts = require('../models/posts');

router.get('/', function(req, res, next) {
    console.log("?????")
    return Posts.find({}).sort({createdAt: -1}).then((post) => res.send(post));
});

router.post('/addPost', function(req, res, next) {
    const post = Posts();
    console.log(req.body)
    post.createdAt = Date.now()
    console.log(post.createdAt)
    post.title = req.body.title;
    post.content = req.body.content;

    return post.save().then((post) => res.send(post)).catch((error) => res.status(500).send({error}));
});

module.exports = router;
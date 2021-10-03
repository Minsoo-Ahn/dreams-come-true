var express = require('express');
var router = express.Router();

var Posts = require('../models/posts');

/* GET home page. */
router.get('/', function(req, res, next) {
    return Posts.find({}).sort({regdate: -1}).then((post) => res.send(post));
});

router.post('/addPost', function(req, res, next) {
    const post = Posts;
    console.log("here!!")
    console.log(req.body)
    const title = req.body.title;
    const content = req.body.content;

    post.title = title;
    post.content = content;

    return post.save().then((post) => res.send(post)).catch((error) => res.status(500).send({error}));
});

module.exports = router;
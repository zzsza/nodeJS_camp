var express = require("express");
var router = express.Router();

var Post = require("../models/post");


router.get("/", function(request, response){
    // return response.render("posts/list");
    Post.find({}, function(error, posts){
        if (error) response.send(error);
        return response.render("posts/list", {"posts": posts});
    });
});



router.post("/", function(request, response){
    var title  = request.body.title;
    var content = request.body.content;
    // body-parser 설치!
    var post = Post({
        title: title,
        content: content
    });

    post.save(function(error) {
        if (error) response.send(error);
        return response.redirect("/posts/" + post._id + "/");
    })
});



router.get("/new", function(request, response){
    return response.render("posts/new");
});

router.get("/:postId", function(request, response) {
    var postId = request.params.postId;

    Post.findById(postId, function(error, post) {
        if (error) response.send(error);
        return response.render("posts/detail", {"post": post});
    });
});


router.get("/:postId/edit", function(request, response) {
    var postId = request.params.postId;

    Post.findById(postId, function(error, post) {
        if (error) response.send(error);
        return response.render("posts/edit", {"post": post});
    });
});


router.post("/:postId/comments", function(request, response){
    var postId = request.params.postId;

    Post.findById(postId, function(error, post){
        if (error) response.send(error);
        var content = request.body.content;

        var comment = {
            content: content
        };

        post.comments.push(comment);

        post.save(function(error){
            if (error) response.send(error);
            return response.redirect("/posts/" + post._id + "/");
        });
    });
});

router.get("/:postId/comments/:commentId/delete", function(request, response) {
   var postId = request.params.postId;
   var commentId = request.params.commendId;

   Post.findById(postId, function(error, post){
       if (error) response.send(error);
       post.comments.id(commentId).remove();
       post.save(function(error) {
           if (error) response.send(error);
           return response.redirect("/posts/" + post._id + "/");
       });

   });
});

module.exports = router;

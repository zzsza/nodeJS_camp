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

router.get("/new", function(request, response){
    return response.render("posts/new");
});

router.post("/", function(request, response){
    var tile = request.body.title;
    var content = request.body.content;

    var post = Post({
        title: title,
        content: content
    });

    post.save(function(error) {
        if (error) response.send(error);
        return response.redirect("/posts/");
    });

});

router.get("/:postId", function(request, response){
   var postId = request.params.postId;

   Post.findById(postId, function(error, post){
      if (error) response.send(error);
      return response.render("posts/detail", {"post": post});

   });
});

module.exports = router;


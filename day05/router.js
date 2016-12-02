/**
 * Created by Byeon on 2016-12-02.
 */

var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");

router.use(function tracRequestTimeAndURL(request, response, next){
    console.log("User request to " + request.url + " on " + Date.now());
    next();
});

router.get("/", function(request, response){
    var animals = ["dog", "cat", "bird", "pikachu"];

    response.render("home", {"animals":animals});
});

router.get("/users", function(request, response){
    var users = [];
    fs.readFile(path.join(__dirname, "users.csv"), function(error, data){
        var lines = String(data).split("\n");

        for (var lineNumber in lines){
            var line = lines[lineNumber];
            var username = line.split(",")[0];
            var address = line.split(",")[1];
            console.log(username);
            console.log(address);

            var user = {
                "username": username,
                "address": address
            };
            users.push(user);
        }
        response.send({"users": users});
    });
});


router.get("/:roomId", function(request, response){
    var roomId = request.params.roomId;
    response.send("room detail on "+ roomId);
});


module.exports = router;

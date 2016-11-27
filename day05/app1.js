
var path = require("path");
var express = require("express");

var app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname + "/views"));

app.get("/", function(request, response){
    var animals = ["dog", "cat", "bird", "pikachu"];

    response.render("home", {"animals":animals});
});

app.get("/:roomId", function(request, response){
    var roomId = request.params.roomId;

    response.send("room detail on "+ roomId);
});

app.listen(3000, function(){
    console.log("Server is  listening on localhost:3000");
});

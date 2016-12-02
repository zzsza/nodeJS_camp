
var path = require("path");
var express = require("express");
var logger = require("morgan");

var router = require("./router");

var app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname + "/views"));

app.use(logger());

app.use("/", router);

app.listen(3001, function(){
    console.log("Server is  listening on localhost:3001");
});


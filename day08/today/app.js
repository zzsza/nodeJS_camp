/**
 * Created by Byeon on 2016-12-11.
 */

var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


var homeRoute = require("./routes/home");
var postsRoute = require("./routes/posts");


// express 생성
var app = express();


// 데이터 베이스와 연결 ( mongoose, monk )
mongoose.connect("mongodb://localhost/nodecamp");




// app setting - application / template
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// StaticFiles(css, js, img) serving
app.use(express.static(path.join(__dirname, "public")));

// Routes/Middleware
app.use("/", homeRoute);
app.use("/posts", postsRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function(){
    console.log("server is listening on localhost:3000");
});
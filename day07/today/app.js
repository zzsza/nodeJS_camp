/**
 * Created by Byeon on 2016-12-06.
 */
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var homeRouter = require("./routes/home");
var usersRouter = require("./routes/users");

var postsRouter = require("./routes/posts");

var app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

var monk = require("monk");
var db = monk("mongodb://localhost:27017/nodecamp");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(request, response, next){
   request.db = db; // 다른 router에서 request 객체를 통해서 db에 접근할 수 있음
    next();
});
app.use("/", homeRouter);
app.use("/users/", usersRouter);
app.use("/posts/", postsRouter);

// app.use("/users/", userRouter) 만약 user 라우터에 들어간다면 이런식


// // GET, POST 데이터를 받는 방법 복습 => home.js로 보냄
// app.get("/", function(request, response){
//     // get parameter를 그대로 json 형태로 response에 담아서 보내기
//     return response.json(request.query);
// });
//
// app.post("/", function(request, response){
//     // post data를 그대로 json 형태로 response에 담아서 보내기
//     return response.json(request.body);
// });

app.listen(3000, function(){
    console.log("server is listening on localhost:3000");
});

// npm install --save mongodb@1.4
// npm install --save monk
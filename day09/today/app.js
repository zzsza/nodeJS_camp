/**
 * Created by Byeon on 2016-12-25.
 */
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash")


// load routers
var homeRouter = require("./routes/home");
var flashRoter = require("./routes/flash");



var app = express();

// home => header, content, footer
// pug

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// user Middlewares
// Cookie and Session Settings
app.use(cookieParser("Nodecamp is awesome."));
app.use(session({
    secret: "Nodecamp is awesome.",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
// flash는 쿠키와 세션이 끝나는 곳에 설정해야됩니다!


// Use routers
app.use("/static", express.static(__dirname + "/public"));
app.use("/", homeRouter);
app.uese("/flash", flashRouter);

app.listen(3000, function(){
    console.log("Server is listenging on localhost:3000");
});
/**
 * Created by Bsy on 2016-11-09.
 */

var http = require("http");
var router = require("./router.js");

// router.home / router.room으로 부를 수 있음
dk
// router 유저가 request 보내는 주소에 따라 다른 작업을..!!

var app = http.createServer(function(request, response){
    console.log(request.url); // "/", "/4023851"
    //
    // if (request.url === "/"){
    //     response.write("home");
    //     response.end();
    // }
    // router 로 보내버렸음
    // ==, === : ===을 많이 사용하게 될 거에요
    //
    // var roomId = request.url.replace("/", "");
    // if (roomId.length > 0){
    //     response.write(roomId);
    //     response.end();
    // }

    // response.write("hello world");
    // response.end();

    router.home(request, response);
    router.room(request, response);
});

app.listen(3001);
//localhost:3001
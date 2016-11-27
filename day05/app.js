/**
 * Created by Byeon on 2016-11-25.
 */
// npm init
// cmd에서 npm install --save express


var path = require("path");
var express = require("express");

var app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname + "/views"));
// path설정을 해줘야합니다..! 실행중인 파일의 디렉토리에 있는 views 폴더를 뜻함

// 설정을 바꿀 경우 app.set을 사용
// views라는 곳에 html을 저장함

app.get("/", function(request, response){
//   response.send("hello world"); // write가 아니고, response.end()도 없음!!
    var animals = ["dog", "cat", "bird", "pikachu"];

    response.render("home", {"animals":animals});
    // 렌더를 할 때 animals라는 변수를 보냄
});

app.get("/:roomId", function(request, response){ // 보통 /rooms/:roomId 로 표현을 함
    var roomId = request.params.roomId;

    response.send("room detail on "+ roomId);
});
// :(세미 콜론)이 있어야 변수로 인식
 
app.listen(3000, function(){
    console.log("Server is  listening on localhost:3000");
    // 성공할 시 실행할 롤백함수까지 정의
});

// Using template engines with Express : view engine이 알아서 html로 바꿔줄거임 -> Pug를 사용할 예정 ( 구이름 : jade )

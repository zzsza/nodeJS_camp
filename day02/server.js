var http = require("http");
// http라는 모듈 안의 함수를 사용할 수 있게 됩니다

// 인자값으로 함수가 들어갑니다
var app = http.createServer(function(request, response) {
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h1>hello world</h1>");
    setInterval(function () {
        response.write("<h3>hello world</h3>")
    }, 100);
    response.end();
});
// 100번동안 hello world 출력. 이런 노드의 특징을 이용해 실시간 채팅, 스트리밍 서비스를 만들 수 있음

app.listen(3000, function() {
    console.log("Server is listening on localhost:3000");
});

// 웹 서버를 띄웠습니당..!

// c9.io 의 경우 app.listen(process.env.PORT); 를 추가하고 run을 하면 배포가 됨
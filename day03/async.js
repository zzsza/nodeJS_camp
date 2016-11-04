// async ( 비동기 )

var fs = require("fs");

console.log("Start async.js");

fs.readFile("./hello.txt", function(error, data){
    console.log(String(data));
});
// callback function 이 중요해요
// callback 함수를 사용하여 이렇게 프로그램의 흐름을 끊지 않음으로서,
// Non-Blocking 코드를 사용하는 서버는 Blocking 코드를 사용하는 서버보다
// 더 많은 양의 요청을 빠르게 처리 할 수 있게됩니다.

console.log("Finish async.js");

// 5번 라인에서 다 읽을때까지 기다리지 않고 바로 밑으로 내려간 후, finish async를 출력하고
// hello txt 를 읽고 6번이 출력될듯

// sync와 async을 계속 생각해야합니당


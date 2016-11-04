// sync ( 동기 )

var fs = require("fs");

console.log("Start sync.js");

var helloText = fs.readFileSync("./hello.txt");

console.log(String(helloText));

console.log("Finish sync.js");

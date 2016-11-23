// /**
//  * Created by Byeon on 2016-11-21.
//  */
// var https = require("https");
//
// var request = https.get("https://watcha.net/home/news.json?page=2&per=20", function(response){
//     var data = "";
//
//     response.on("data", function(chunk){
//         data += chunk;
//     })
//
//     response.on("end", function(){
//         var jsonData = JSON.parse(data);
//         console.log(jsonData);
//     })
// })
//
// var http = require("http");
// var https = require("https");
//
// var app = http.createServer(function(request, response){
//     if (request.url === "/") {
//         var apiRequest = https.get("https://watcha.net/home/news.json?page=2&per=20", function (apiResponse) {
//             var apiData = "";
//             apiResponse.on("apiData", function (chunk) {
//                 apiData += chunk;
//             });
//
//             apiResponse.on("end", function () {
//                 var apiJsonData = JSON.parse(apiData);
//                 response.write(apiData);
//                 response.end();
//             });
//         });
//     }
// }).listen(3000);



var http = require("http");
var router = require("./router")

var app = http.createServer(function(request, response){
    router.home(request, response)
}).listen(3000);

console.log("Server is listening on localhost:3000");
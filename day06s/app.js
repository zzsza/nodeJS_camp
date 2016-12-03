/**
 * Created by Byeon on 2016-12-03.
 */

var express = require("express");
var https = require("https");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// bodyParser 설정 - middleware ( logger - morgan 사용 )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// url에서 정보를 받아오는 확장된 extend:true
// parse : 데이터 덩어리에서 우리가 관리할 수 있는 데이터 형태로 바꾸는 작업


app.get("/", function(request, response) {
    var search = request.query.search;

    https.get("https://watcha.net/home/news.json?page=1&per=50", function (apiResponse) {
        var apiData = "";
        apiResponse.on("data", function (chunk) {
            apiData += chunk;
        });

        apiResponse.on("end", function () {
            var apiJsonData = JSON.parse(apiData);
            var news = apiJsonData.news;

            return response.render(
                "home",
                {news: news, search: search}
            );
        });
    });
});


app.listen(3000, function(){
    console.log("Server is  listening on localhost:3000");
});

// GET, POST 방식
// express에선 빠지고 body-parser를 사용..!
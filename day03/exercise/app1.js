/**
 * Created by Byeon on 2016-11-17.
 */

var http = require("http");
var router = require('./router1');


var app = http.createServer(function(request, response){
    console.log(request.url);

    router.home(request, response);
    router.room(request, response);
})

app.listen(3002);

// app.js는 실행하고 어떻게 듣는지 설정하게 만들어봐야함
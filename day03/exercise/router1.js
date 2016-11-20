/**
 * Created by Byeon on 2016-11-17.
 */
// router.js는 app에서 home / room detail 부분을 나눠주는 친구
    // 분기처리
var fs = require("fs");
var render = require("./renderer1");

function home(request, response){
    if (request.url == "/"){
    }
    render("home", response);
}

function room(request, response){
    var roomId = request.url.replace("/", "");
    if (roomId.length > 0){
        response.write(roomId);
        response.end();
    }
}

module.exports.home = home;
module.exports.room = room;

/**
 * Created by Bsy on 2016-11-09.
 */

var fs = require('fs');

function home(request, response){
    if (request.url === "/"){
        // sync 방식
        // var homecontent = fs.readFileSync("./templates/home.html")
        // reponse.write(homeContent);
        // response.end();

        // Async : 노드는 비동기식 방법을 선호함
        fs.readFile("./templates/home.html", function(error, data){
            respone.write(data);
            response.end();
        })
    }
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
// 밖에선 home을 부르면 이 파일의 home이 사용됨


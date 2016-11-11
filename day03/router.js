/**
 * Created by Bsy on 2016-11-09.
 */

var fs = require("fs");
var render = require("./renderer");
var http = require("http");

function home(request, response){
    if (request.url === "/"){
        // var baseContent = fs.readFileSync("./templates/base.html", "utf8");
        // var headerContent = fs.readFileSync("./templates/header.html", "utf8");
        // var footerContent = fs.readFileSync("./templates/footer.html", "utf8");
        // var homeContent = fs.readFileSync("./templates/home.html", "utf8");
        //
        // baseContent = baseContent.replace("$ HEADER $", headerContent);
        // baseContent = baseContent.replace("$ FOOTER $", footerContent);
        // baseContent = baseContent.replace("$ CONTENT $", homeContent);
        //
        // response.write(baseContent);
        // response.end();

        render("home", response, {});


        // sync 방식
        // var homecontent = fs.readFileSync("./templates/home.html")
        // reponse.write(homeContent);
        // response.end();

        // Async : 노드는 비동기식 방법을 선호함
        // fs.readFile("./templates/home.html", function(error, data){
        //     response.write(data);
        //     response.end();

        // base header footer 나눈 후 코드
        // fs.readFile("./templates/base.html", function(error, baseData){
        //     fs.readFile("./templates/header.html", function(error, headerData){
        //         fs.readFile("./templates/footer.html", function(error, footerData{
        //             .... 이를 Callback 지옥이라 함 이 경우엔 차라리 Sync이 좋음
        //         }))

}}

function room(request, response){
    var roomId = request.url.replace("/", "");
    if (roomId.length > 0){
        http.get("http://api.zigbang.com/v1/items?detail=true&item_ids=" + roomId, function(apiResponse){
            var data = "";

            apiResponse.on("data", function(chunk){
                data += chunk;
            });
            apiResponse.on("end", function(){
                try {
                    var jsonData = JSON.parse(data);
                    var roomInformation = jsonData["items"][0].item;

                    var deposit = roomInformation["deposit"];
                    var rent = roomInformation["rent"];
                    var address = roomInformation["agent_address1"];
                    var image_url = roomInformation["images"][0].url;

                    var values = {
                        "deposit":deposit,
                        "rent":rent,
                        "address":address,
                        "image_url":image_url
                    }

                    render("room", response, values);

                } catch(error){
                    console.log(error.message);
                    response.write(error.message);
                    response.end();
                }
            });
        });

        // response.write(roomId);
        // response.end();
    }
}

module.exports.home = home;
module.exports.room = room;
// 밖에선 home을 부르면 이 파일의 home이 사용됨


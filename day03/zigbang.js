/**
 * Created by Bsy on 2016-11-03.
 */

// http.get 함수를 사용할 예정
// 첫번째 인자는 호출할 주소, 두번째 인자는 response를 받아야 함

// node는 data를 한번에 받는게 아니라 stream하게 받음
// 예를 들어 변성윤 => "변성윤" (x)
// ㅂㅕㄴㅅㅓㅇㅇㅠㄴ => "변성윤"


var http = require("http");


function getRoomInformation(roomId){
    http.get("http://api.zigbang.com/v1/items?detail=true&item_ids=" + roomId, function(response){

        var data = "";

        response.on("data", function(chunk){
            data += chunk;
        });

        response.on("end", function(){

            try {
                var jsonData = JSON.parse(data);
                // console.log(data);

                var roomInformation = jsonData.items[0].item;

                var deposit = roomInformation.deposit;
                var rent = roomInformation.rent;

                console.log(deposit);
                console.log(rent);
            } catch (error){
                console.log(error.message);
            }

        });
    });
}

getRoomInformation(6360659);

var roomIds = process.argv.slice(2);
// 리스트 형태로 들어가게 됨

// roomIds.forEach(function(roomId){
//     getRoomInformation(roomId);
// });

roodIds.forEach(getRoomInformation);
// 콜백 함수를 한줄로 표현! ( 리팩토링 )

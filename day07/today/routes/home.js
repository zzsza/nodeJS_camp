/**
 * Created by Byeon on 2016-12-06.
 */

var express = require("express");

var router = express.Router();

// GET, POST 데이터를 받는 방법 복습
router.get("/", function(request, response){
    // get parameter를 그대로 json 형태로 response에 담아서 보내기
    return response.json(request.query);
});

router.post("/", function(request, response){
    // post data를 그대로 json 형태로 response에 담아서 보내기
    return response.json(request.body);
});

module.exports = router;

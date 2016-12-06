/**
 * Created by Byeon on 2016-12-06.
 */

var express = require("express");

var router = express.Router();

router.get("/", function(request, response){
    request.db.get("users").find({}, function(error, document){
        if (error) response.send(error);
        return response.json(document);
    });
});

module.exports = router;

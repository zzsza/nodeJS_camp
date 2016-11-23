/**
 * Created by Byeon on 2016-11-23.
 */

var https = require("https");
var fs = require("fs");

function home(request, response){
    if (request.url === "/" ){
        var apiRequest = https.get("https://watcha.net/home/news.json?page=2&per=20", function(apiResponse){
            var apiData = "";
            apiResponse.on("apiData", function(chunk){
                apiData += chunk;
            });

            apiResponse.on("end", function(){
                var apiJsonData = JSON.parse(apiData);

                var baseContent = fs.readFileSync("./templates/base.html", "utf8");
                var headerContent = fs.readFileSync("./templates/header.html", "utf8");
                var footerContent = fs.readFileSync("./templates/footer.html", "utf8");

                baseContent = baseContent.replace("{{ header }}", headerContent);
                baseContent = baseContent.replace("{{ footer }}", footerContent);

                var news = apiJsonData.news;
                    newsContent = "";

                for (newDetail in news){


                }



                response.write(baseContent);
                response.end();

                // response.write(apiData);
                // response.end();
            });
        });
    };
}

module.exports.home = home;
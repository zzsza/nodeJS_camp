/**
 * Created by Byeon on 2016-11-17.
 */

// html 정리

var fs = require("fs");

function render(teamplateName, response){
    var baseContent = fs.readFileSync("./teamplates/base1.html", "utf8");
    var headerContent = fs.readFileSync("./templates/header1.html", "utf8");
    var footerContent = fs.readFileSync("./teamplates/footer1.html", "utf8");
    var mainContent = fs.readFileSync("./templates/" + templateName + ".html", "utf8");

    baseContent = baseContent.replace("$ HEADER $", headerContent);
    baseContent = baseContent.replace("$ FOOTER $", footeContent);
    baseContent = baseContent.replace("$ CONTENT $", mainContent);

    response.write(baseContent);
    response.end();

}

module.exports
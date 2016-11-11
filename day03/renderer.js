/**
 * Created by Bsy on 2016-11-11.
 */
var fs = require("fs");

function render(templateName, response, values){
    var baseContent = fs.readFileSync("./templates/base.html", "utf8");
    var headerContent = fs.readFileSync("./templates/header.html", "utf8");
    var footerContent = fs.readFileSync("./templates/footer.html", "utf8");
    var mainContent = fs.readFileSync("./templates/" + templateName +".html", "utf8");

    baseContent = baseContent.replace("$ HEADER $", headerContent);
    baseContent = baseContent.replace("$ FOOTER $", footerContent);
    baseContent = baseContent.replace("$ CONTENT $", mainContent);

    for (var key in values){
        baseContent = baseContent.replace("$ "+ key +" $", values[key]);
    };

    response.write(baseContent);
    response.end();

}

module.exports = render;

// 밖에서 부르면 무조건 render
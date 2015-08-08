var fs = require("fs");

module.exports= function (hbs) {
  var header = fs.readFileSync('./partials_tmp/header.html', 'utf8');
  hbs.registerPartial('header', header);
}

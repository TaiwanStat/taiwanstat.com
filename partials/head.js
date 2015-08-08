var fs = require("fs");

module.exports= function (hbs) {
  var head = fs.readFileSync('./partials_tmp/head.html', 'utf8')
  hbs.registerPartial('head', head);
}

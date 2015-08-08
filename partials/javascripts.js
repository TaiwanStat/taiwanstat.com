var fs = require("fs");

module.exports= function (hbs) {
  var javascripts = fs.readFileSync('./partials_tmp/javascripts.html', 'utf8');
  hbs.registerPartial('javascripts', javascripts);
}

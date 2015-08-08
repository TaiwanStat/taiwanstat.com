var fs = require("fs");

module.exports= function (hbs) {
  var footer = fs.readFileSync('./partials_tmp/footer.html', 'utf8');
  hbs.registerPartial('footer', footer);
}

var fs = require("fs");

module.exports= function (hbs) {
  var post_content = fs.readFileSync('./partials_tmp/post_content.html', 'utf8');
  hbs.registerPartial('post_content', post_content);
}

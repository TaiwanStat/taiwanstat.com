var settings = require('./blog.json')
var lists = settings.posts;

var path = require('path');
var post_arr = [];

lists.forEach(function(p) {
  var date_reg = /(\d{4}\/\d{2}\/\d{2})\s+(\d{2}):(\d{2}):(\d{2})/g;
  var d = date_reg.exec(p.date)[1]
  post_arr.push({
    "item": p,
    "full_path": path.join('./opendata/post/', d, p.url_name + '.html')
  })
})


var sites = {
  "title": "用數據看台灣",
  "description": "生長在台灣的我們，很少從一個宏觀的角度看整個台灣的經濟、法律、交通、教育... ，而我們相信數據可以幫我們更了解我們身長在的這片土地上的一切。讓我們來用數據看台灣！",
  "email": "contact@taiwanstat.com",
  "logo": "/assets/images/taiwanstat_thumb.png",
  "cover": "/assets/images/taiwanstat_cover1.png",
  "name": "用數據看台灣團隊",
  "author": "用數據看台灣團隊",
  "author_image": "/assets/images/taiwanstat_thumb.png",
  "url": "http://taiwanstat.com",
  "facebook": {
    "url": "https://facebook.com/taiwanstat",
    "desc": "追蹤 Facebook 粉絲專業"
  },
  "pages": [
    {
      "title": "台灣即時資訊系統",
      "desc": "用最完整的圖表呈現，目前台灣的各種動態，包含天氣、水庫、犯罪等資訊。讓大家能夠知道我們現在台灣到底正在發生什麼事情。",
      "cover": "/assets/images/real_cover.png",
      "url": "http://real.taiwanstat.com/"
    },
    {
      "title": "台灣統計資訊系統",
      "desc": "利用各種圖表呈現臺灣經濟、教育、醫療、能源等議題長期的資料，帶給大家最一目了然的圖表呈現。讓大家能夠知道台灣這塊土地上的進幾年到底如何演變。",
      "cover": "/assets/images/long_cover.png",
      "url": "http://long.taiwanstat.com/"
    },
    {
      "title": "開放資料分析部落格",
      "desc": "利用資料做更深入的探討與分析報導，帶給大家最齊全的數據分析圖表與解析。",
      "cover": "/assets/images/cover.png",
      "url": "http://taiwanstat.com/opendata"
    }
  ]
}

var posts = [{
  "layout": "./layouts/page.html",
  "filename": "./about/index.html",
  "partials": ["./partials/head.js", "./partials/footer.js", "./partials/header.js", "./partials/javascripts.js"],
  "data": {
    "title": "關於我們",
    "content": "./about.md",
    "site": sites
  }
},{
  "layout": "./layouts/default.html",
  "filename": "./index.html",
  "partials": ["./partials/head.js", "./partials/footer.js", "./partials/header.js", "./partials/javascripts.js"],
  "data": {
    "title": "用數據看台灣首頁",
    "site": sites
  }
},{
  "layout": "./layouts/inner_homepage.html",
  "filename": "./opendata/index.html",
  "partials": ["./partials/head.js", "./partials/footer.js", "./partials/header.js", "./partials/javascripts.js"],
  "data": {
    "title": "用數據看台灣 - 開放資料分析部落格",
    "site": sites,
    "posts": post_arr
  }
}]



module.exports = posts;

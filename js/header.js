"use strict";
(function(window, document, undefined) {

  var links = '';
  links += '<a class="mdl-navigation__link" href="https://www.taiwanstat.com/realtime/">台灣開放即時資料</a>';
  links += '<a class="mdl-navigation__link" href="https://www.taiwanstat.com/statistics/">台灣開放統計資料</a>';
  links += '<a class="mdl-navigation__link" href="http://www.taiwanstat.com/global/r/">世界即時資訊</a>';
  links += '<a class="mdl-navigation__link" href="http://www.taiwanstat.com/global/l/">世界統計資訊</a>';
  links += '<a class="mdl-navigation__link" href="https://taiwanstat.com/blog/opendata/">開放資料分析部落格</a>';
  links += ' <a class="mdl-navigation__link" href="https://www.taiwanstat.com/about/">關於我們</a>'


	var str = '<header class="mdl-layout__header">';
  str += '<div class="mdl-layout__header-row">';
  str += '<span class="mdl-layout-title"><a href="http://real.taiwanstat.com/"><img src="https://static.taiwanstat.com/realtime/images/assert/round-logo.png" id="round-logo"/>用數據看台灣</a></span>';
  str += '<div class="mdl-layout-spacer"></div>';
  str += '<nav class="mdl-navigation mdl-layout--large-screen-only">';
  str += links;
  str += '</nav>';
  str += '</div></header>';
  str += '<div class="mdl-layout__drawer">';
  str += '<span class="mdl-layout-title"><a href="http://real.taiwanstat.com/"><img src="/assets/images/round-logo.png" id="round-logo"/>用數據看台灣</a></span>';
  str += '<nav class="mdl-navigation">';
  str += links;
  str += '</div>';
  str += '</div>';

	$('#layout-header').prepend(str);

})(window, document)

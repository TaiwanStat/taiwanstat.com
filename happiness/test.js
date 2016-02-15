// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/notes/notes.js', async: true }
  ]
});

//~~~~開始~~~//

Reveal.addEventListener( 'slidechanged', function( event ) {
  var x = event.indexh ;
  if ( x == ""){
    $('#box-top').css("display","none");
    $('#box-bottom').css("display","none");
    $('#back_intro').css("display","none");
  }
  if ( x == 1){
    $('#box-top').css("display","none");
    $('#box-bottom').css("display","none");
    $('#back_intro').css("display","block");
    //none 
  }
  if (x == 2){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");
    $('#back_intro').css("display","block");
    
    $("#p3_2").css("opacity" , 0) ;
  }
  if (x == 3){
    chart_happy() ;
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");
    $('#back_intro').css("display","none")
    
    $("#p3_2").delay(750).fadeTo("slow" , 1) ;
  }
  if (x == 4){
    
    $('#box-top').css("display","none");
    $('#box-bottom').css("display","none");
    $('#back_intro').css("display" , "none")
    
    $("#p3_2").css("opacity" , 0) ;
    $("#p5_2").css("opacity" , 0) ;
  }
  if (x == 5){

    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");
    $('#back_intro').css("display" , "none")

    $('#p5_2').delay(900).fadeTo("slow",1) ;
  }
  if (x == 6){
    chart_GDP() ;
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");
    $('#back_intro').css("display" , "none")

    $('#p7_2').css("opacity",0);

  }
  if (x == 7){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");
    $('#back_intro').css("display", "none");

    $("#p7_2").delay(900).fadeTo("slow" , 1) ;
  }
  if (x == 8){
    $('#box-top').css("display","none");
    $('#box-bottom').css("display","none");
    $('#back_intro').css("display", "none");

    $('#p7_2').css("opacity",0);
  }
  if (x == 9){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

  }
  if (x == 10){
    chart_life();

    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $("#p11_2").css("opacity",0) ;
  }
  if (x == 11){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $("#p11_2").delay(900).fadeTo("slow",1) ;

  }
  if (x == 12){
    chart_suicide();
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $("#p11_2").css("opacity",0) ;
    
  }
  if (x == 13){
    $('#box-top').css("display","none");
    $('#box-bottom').css("display","none");

    $("#p14_sub").css("opacity" , 0) ;
    
  }
  if (x == 14){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $('#p14_sub').delay(900).fadeTo("slow",1);
    $("#p15_sub").css("opacity",0) ;
    
  }
  if (x == 15){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $("#p14_sub").css("opacity" , 0) ;
    $("#p15_sub").delay(700).fadeTo("slow",1) ;
    $('#p16_3').css("opacity",0);
    
  }
  if (x == 16){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $("#p15_sub").css("opacity",0) ;
    $("#p16_3").delay(1000).fadeTo("slow",1) ;
  }
  if (x == 17){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $('#p16_3').css("opacity",0);
  }
  if ( x == 18){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $('#p19_2').css("opacity",0);
  }
  if ( x == 19){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $('#p19_2').delay(900).fadeTo("slow",1);
  }
  if ( x == 20){
    $('#box-top').css("display","block");
    $('#box-bottom').css("display","block");

    $('#p21_2').css("opacity",0);
  }
  if ( x == 21){
    $('#box-top').css("display","none");
    $('#box-bottom').css("display","none");

    $('#p21_2').delay(700).fadeTo("slow",1);
  }

});

// total data
var totalData = [
    {
      "country": "丹麥 Denmark",
      "rank": "1",
      "index": "7.693",
      "GDP": "59819",
      "life": "80.3",
      "suicide": "9.19"
    },
    {
      "country": "挪威 Norway",
      "rank": "2",
      "index": "7.655",
      "GDP": "100898",
      "life": "81.4",
      "suicide": "9.28"
    },
    {
      "country": "瑞士 Switzerland",
      "rank": "3",
      "index": "7.65",
      "GDP": "84748",
      "life": "82.7",
      "suicide": "9.56"
    },
    {
      "country": "荷蘭 Netherlands",
      "rank": "4",
      "index": "7.512",
      "GDP": "50793",
      "life": "81.1",
      "suicide": "8.54"
    },
    {
      "country": "加拿大 Canada",
      "rank": "6",
      "index": "7.477",
      "GDP": "51964",
      "life": "81.4",
      "suicide": "10"
    },
    {
      "country": "芬蘭 Finland",
      "rank": "7",
      "index": "7.389",
      "GDP": "49151",
      "life": "80.8",
      "suicide": "15.11"
    },
    {
      "country": "澳地利 Austria",
      "rank": "8",
      "index": "7.369",
      "GDP": "50511",
      "life": "80.8",
      "suicide": "11.87"
    },
    {
      "country": "美國 United States",
      "rank": "17",
      "index": "7.082",
      "GDP": "53042",
      "life": "74.5",
      "suicide": "12.38"
    },
    {
      "country": "南韓 South Korea",
      "rank": "41",
      "index": "6.267",
      "GDP": "25977",
      "life": "81.4",
      "suicide": "29.34"
    },
    {
      "country": "台灣 Taiwan",
      "rank": "42",
      "index": "6.221",
      "GDP": "20900",
      "life": "76.7",
      "suicide": "15.28"
    },
    {
      "country": "日本 Japan",
      "rank": "43",
      "index": "6.064",
      "GDP": "38634",
      "life": "83.3",
      "suicide": "18.78"
    },
    {
      "country": "中國 China",
      "rank": "93",
      "index": "4.978",
      "GDP": "6807",
      "life": "75.3",
      "suicide": "7.87"
    },
    {
      "country": "印度 India",
      "rank": "111",
      "index": "4.772",
      "GDP": "1498",
      "life": "67.6",
      "suicide": "21.21"
    },
    {
      "country": "葛摩 Comoros",
      "rank": "149",
      "index": "3.851",
      "GDP": "815",
      "life": "62.9",
      "suicide": "16.17"
    },
    {
      "country": "幾內亞 Guinea",
      "rank": "150",
      "index": "3.847",
      "GDP": "523",
      "life": "58.2",
      "suicide": "4.45"
    },
    {
      "country": "盧安達 Rwanda",
      "rank": "152",
      "index": "3.715",
      "GDP": "639",
      "life": "63.3",
      "suicide": "11.68"
    },
    {
      "country": "蒲隆地 Burundi",
      "rank": "153",
      "index": "3.706",
      "GDP": "267",
      "life": "56.2",
      "suicide": "22.51"
    },
    {
      "country": "Central African Republic",
      "rank": "154",
      "index": "3.623",
      "GDP": "333",
      "life": "49.8",
      "suicide": "9.48"
    },
    {
      "country": "多哥 Togo",
      "rank": "156",
      "index": "2.936",
      "GDP": "636",
      "life": "59.1",
      "suicide": "5.1"
    },
    {
      "country":""
    },
    {
      "country":""
    }
  ];

var gdpData = [
    {
      "country": "丹麥 Denmark",
      "rank": "1",
      "index": "7.693",
      "GDP": "59819",
      "life": "80.3",
      "suicide": "9.19"
    },
    {
      "country": "挪威 Norway",
      "rank": "2",
      "index": "7.655",
      "GDP": "100898",
      "life": "81.4",
      "suicide": "9.28"
    },
    {
      "country": "瑞士 Switzerland",
      "rank": "3",
      "index": "7.65",
      "GDP": "84748",
      "life": "82.7",
      "suicide": "9.56"
    },
    {
      "country": "荷蘭 Netherlands",
      "rank": "4",
      "index": "7.512",
      "GDP": "50793",
      "life": "81.1",
      "suicide": "8.54"
    }
  ];

function chart_happy(){
  ////Chart
  AmCharts.makeChart("chart_happy", {
    "type": "serial",
    //"theme": "light",
    "categoryField": "country",
    "columnWidth": 0.7,
    "startDuration": 1,
    "processCount": 0,
    "fontSize": 14,
    "categoryAxis": {
      "autoRotateAngle": -3.6,
      "gridPosition": "start",
      "fontSize": 14,
      "labelOffset": 3,
      "labelRotation": 90,
      "minHorizontalGap": 43,
      "minVerticalGap": 33,
      "offset": 1,
      "autoGridCount": false,
      "axisAlpha": 1,
      "axisColor": "#555555",
      "gridAlpha": 0.6,
      "gridColor": "#FFFFFF",
      "gridCount": 50
    },
    "valueAxes":[{
      "id": "ValueAxis-1",
      "axisAlpha": 1,
      "gridAlpha": 0,
      "position": "left",
      "fontSize": 14,
      "title": "幸福指數(綜合分數)",
    }],/*
    "chartCursor": {
      "cursorAlpha": 0,
      "cursorColor":"#000000",
      "fullWidth":true,
      "valueBalloonsEnabled": false,
      "zoomable": false
    },*/
    "trendLines": [],
    "graphs": [
      {
        "id": "AmGraph-3",
        "title": "幸福指數",
        "type": "column",
        "valueField": "index",
        "cornerRadiusTop": 3,
        "fillAlphas": 1,
        "balloonText": "Value:[[value]] , World rank:[[rank]] ",
        "visibleInLegend": false,
      }
    ],
    "balloon": {
      "offsetX": 0
    },
    "legend": {
      "enabled": true,
      "useGraphSettings": true
    },
    "titles": [
      {
        "id": "Title-1",
        "size": 23,
        "text": "2013 全球幸福指數(GNH)"
      }
    ],
    "dataProvider": totalData
  });
}

function chart_GDP(){
  ////Chart_GDP
  AmCharts.makeChart("chart_gdp", {
    "type": "serial",
    //"theme": "light",
    "categoryField": "country",
    "columnWidth": 0.7,
    "startDuration": 1,
    "processCount": 0,
    "fontSize": 14,
    "categoryAxis": {
      "autoRotateAngle": -3.6,
      "gridPosition": "start",
      "fontSize": 14,
      "labelOffset": 3,
      "labelRotation": 90,
      "minHorizontalGap": 43,
      "minVerticalGap": 33,
      "offset": 1,
      "autoGridCount": false,
      "axisAlpha": 1,
      "axisColor": "#555555",
      "gridAlpha": 0.6,
      "gridColor": "#FFFFFF",
      "gridCount": 50
    },
    "valueAxes":[{
      "id": "ValueAxis-1",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left",
      "fontSize": 14,
      "title": "幸福指數(綜合分數)",
    },{
      "id": "gdpAxis",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "right",
      "fontSize": 14,
      "title": "美元/年 (人均GDP)",
    }],
    "chartCursor": {
      "enabled": true,
      "cursorPosition": "mouse",
      "valueLineAlpha": 0.84,
      "cursorColor":"#cc0000"
    },
    "graphs": [
      {
        "title": "幸福指數/Rank",
        "type": "column",
        "valueField": "index",
        "cornerRadiusTop": 3,
        "fillAlphas": 0.8,
        "balloonText": "Value:[[value]] , Rank:[[rank]] ",
        "legendValueText": "[[value]] / [[rank]] (Global)",
        "legendPeriodValueText": "滑動滑鼠取得詳細資訊"
      },{
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletColor": "#FFFFFF",
        "bulletSizeField": "GDP/1500",
        "labelPosition": "right",
        "title": "GDP(人均)",
        "fillAlphas": 0,
        "valueField": "GDP",
        "valueAxis": "gdpAxis",
        "balloonText": "[[value]] 美元/年",
        "legendValueText": "[[value]] 美元/年",
        "legendPeriodValueText": "滑動滑鼠取得詳細資訊"
      }
    ],
    "balloon": {
      "offsetX": 0
    },
    "legend": {
      "equalWidths": false,
      "useGraphSettings": true,
      "valueAlign": "left",
      "valueWidth": 120
    },
    "titles": [
      {
        "size": 23,
        "text": "可是 有些國家的GDP卻沒有想像中的高...?"
      }
    ],
    "dataProvider": totalData
  });
}

function chart_life(){
  ////Chart_life
  AmCharts.makeChart("chart_life", {
    "type": "serial",
    //"theme": "light",
    "categoryField": "country",
    "columnWidth": 0.7,
    "startDuration": 1,
    "processCount": 0,
    "fontSize": 14,
    "categoryAxis": {
      "autoRotateAngle": -3.6,
      "gridPosition": "start",
      "fontSize": 14,
      "labelOffset": 3,
      "labelRotation": 90,
      "minHorizontalGap": 43,
      "minVerticalGap": 33,
      "offset": 1,
      "autoGridCount": false,
      "axisAlpha": 1,
      "axisColor": "#555555",
      "gridAlpha": 0.6,
      "gridColor": "#FFFFFF",
      "gridCount": 50
    },
    "valueAxes":[{
      "id": "ValueAxis-1",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left",
      "fontSize": 14,
      "title": "幸福指數(綜合分數)",
    },{
      "id": "lifeAxis",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "inside": true,
      "fontSize": 14,
      "position": "right",
      "title": "國民平均預期壽命"
    }],
    "chartCursor": {
      "enabled": true,
      "cursorPosition": "mouse",
      "valueLineAlpha": 0.84,
      "cursorColor":"#cc0000"
    },
    "graphs": [
      {
        "title": "幸福指數/Rank",
        "type": "column",
        "valueField": "index",
        "cornerRadiusTop": 3,
        "fillAlphas": 0.8,
        "balloonText": "Value:[[value]] , Rank:[[rank]] ",
        "legendValueText": "[[value]] / [[rank]] (Global)",
        "legendPeriodValueText": "滑動滑鼠取得詳細資訊"
      },{
        "bullet": "square",
        "bulletBorderAlpha": 1,
        "bulletBorderThickness": 1,
        "dashLengthField": "dashLength",
        "title": "預期壽命",
        "fillAlphas": 0,
        "valueField": "life",
        "valueAxis": "lifeAxis",
        "balloonText": "[[value]] 歲(years)",
        "legendValueText": "[[value]] 歲(years)",
        "legendPeriodValueText": "滑動滑鼠取得詳細資訊"
      }
    ],
    "balloon": {
      "offsetX": 0
    },
    "legend": {
      "equalWidths": false,
      "useGraphSettings": true,
      "valueAlign": "left",
      "valueWidth": 120
    },
    "titles": [
      {
        "size": 23,
        "text": "可是日本的預期壽命卻遠高於其他國家...?"
      }
    ],
    "dataProvider": totalData
  });
}

function chart_suicide(){
  ////Chart_suicide
  AmCharts.makeChart("chart_suicide", {
    "type": "serial",
    "theme": "chalk",
    "categoryField": "country",
    "columnWidth": 0.7,
    "startDuration": 1,
    "processCount": 0,
    "fontSize": 14,
    "categoryAxis": {
      "autoRotateAngle": -3.6,
      "gridPosition": "start",
      "fontSize": 14,
      "labelOffset": 3,
      "labelRotation": 90,
      "minHorizontalGap": 43,
      "minVerticalGap": 33,
      "offset": 1,
      "autoGridCount": false,
      "axisAlpha": 1,
      "axisColor": "#555555",
      "gridAlpha": 0.4,
      "gridColor": "#FFFFFF",
      "gridCount": 50
    },
    "valueAxes":[{
      "id": "ValueAxis-1",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left",
      "fontSize": 14,
      "title": "幸福指數(綜合分數)",
    },{
      "id": "suicideAxis",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "right",
      "fontSize": 14,
      "title": "自殺率 / 每 100,000人",
    }],
    "chartCursor": {
      "enabled": true,
      "cursorPosition": "mouse",
      "valueLineAlpha": 0.84,
      "cursorColor":"white"
    },
    "graphs": [
      {
        "title": "幸福指數/Rank",
        "type": "column",
        "valueField": "index",
        "cornerRadiusTop": 3,
        "fillAlphas": 0.7,
        "balloonText": "Value:[[value]] , Rank:[[rank]] ",
        "legendValueText": "[[value]] / [[rank]] (Global)",
        "legendPeriodValueText": "滑動滑鼠取得詳細資訊"
      },{
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletColor": "black",
        "bulletSizeField": "GDP/1500",
        "labelPosition": "right",
        "title": "自殺率",
        "fillAlphas": 0,
        "valueField": "suicide",
        "valueAxis": "suicideAxis",
        "balloonText": "[[value]]人 / 十萬人",
        "legendValueText": "[[value]] / 100,000人",
        "legendPeriodValueText": "滑動滑鼠取得詳細資訊"
      }
    ],
    "balloon": {
      "offsetX": 0
    },
    "legend": {
      "equalWidths": false,
      "useGraphSettings": true,
      "valueAlign": "left",
      "valueWidth": 120
    },
    "titles": [
      {
        "size": 23,
        "text": "看看南韓的自殺率...這些數字又代表什麼含意...？"
      }
    ],
    "dataProvider": totalData
  });
}

//////
function chart_GDP_highlight(){
  ////Chart_GDP
  AmCharts.makeChart("chart_highlight", {
    "type": "serial",
    //"theme": "light",
    "categoryField": "country",
    "columnWidth": 0.7,
    "startDuration": 1,
    "processCount": 0,
    "fontSize": 14,
    "categoryAxis": {
      "autoRotateAngle": -3.6,
      "gridPosition": "start",
      "fontSize": 14,
      "labelOffset": 3,
      "minHorizontalGap": 43,
      "minVerticalGap": 33,
      "offset": 1,
      "autoGridCount": false,
      "axisAlpha": 1,
      "axisColor": "#555555",
      "gridAlpha": 0.6,
      "gridColor": "#FFFFFF",
      "gridCount": 50
    },
    "valueAxes":[{
      "id": "ValueAxis-1",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left",
      "fontSize": 14,
      "title": "幸福指數(綜合分數)",
    },{
      "id": "gdpAxis",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "right",
      "fontSize": 14,
      "title": "美元/年 (人均GDP)",
    }],
    "chartCursor": {
      "enabled": true,
      "cursorPosition": "mouse",
      "valueLineAlpha": 0.84,
      "cursorColor":"#cc0000"
    },
    "graphs": [
      {
        "title": "幸福指數/Rank",
        "type": "column",
        "valueField": "index",
        "cornerRadiusTop": 3,
        "fillAlphas": 0.7,
        "balloonText": "Value:[[value]] , Rank:[[rank]] ",
        "legendValueText": "[[value]] / [[rank]] (Global)",
        "legendPeriodValueText": "滑動滑鼠取得詳細資訊"
      },{
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletColor": "#FFFFFF",
        "labelPosition": "right",
        "title": "GDP(人均)",
        "fillAlphas": 0,
        "valueField": "GDP",
        "valueAxis": "gdpAxis",
        "balloonText": "[[value]] 美元/年",
        "legendValueText": "[[value]] 美元/年",
        "legendPeriodValueText": "滑動滑鼠取得詳細資訊"
      }
    ],
    "balloon": {
      "offsetX": 0
    },
    "legend": {
      "equalWidths": false,
      "useGraphSettings": true,
      "valueAlign": "left",
      "valueWidth": 120
    },
    "titles": [
      {
        "size": 23,
        "text": "擁有的錢越多 應該越幸福..吧...?"
      }
    ],
    "dataProvider": gdpData
  });
}


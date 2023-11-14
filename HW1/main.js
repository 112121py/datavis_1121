let myGraph = document.getElementById('myGraph');

//anninmiru
let tw_miru = {}; //trace 指定圖形與資料
tw_miru.mode = "lines+markers"; //diff 模式+直接顯示在畫面的文字
tw_miru.type = "scatter";
tw_miru.name = "Annin Miru Channel"; //取名
tw_miru.marker =  //粗細
{
    size:10,
    color:'#7C7050'
};
tw_miru.x = [];
tw_miru.y = [];
tw_miru.text = []; //資料點名字list
tw_miru.textposition = "bottom center"; //文字(名字)顯示位置
tw_miru.textfont = { //set
    family:"Raleway, sans-serif", //font
    size:10 //size
};
for(let i=0;i<vt01_miru.length;i++)
{
    tw_miru.x[i] = vt01_miru[i][0];
    tw_miru.y[i] = vt01_miru[i][1];
    tw_miru.text[i] = vt01_miru[i][2]; //資料點的名字呈現出來(data.js)
}

//ruroro
let tw_ruroro = {};
tw_ruroro.mode = "lines+markers"; //diff
tw_ruroro.type = "scatter";
tw_ruroro.name = "璐洛洛 Ruroro"; 
tw_ruroro.marker = 
{
    color: '#3C904E'
};
tw_ruroro.x = [];
tw_ruroro.y = [];
tw_ruroro.text = [];
for(let i=0;i<vt02_ruroro.length;i++)
{
    tw_ruroro.x[i] = vt02_ruroro[i][0];
    tw_ruroro.y[i] = vt02_ruroro[i][1];
    tw_ruroro.text[i] = vt02_ruroro[i][2];
}

//rumi
let tw_rumi = {}; 
tw_rumi.mode = "lines+markers"; //diff
tw_rumi.type = "scatter";
tw_rumi.name = "Rumi ch. 懶貓子"; 
tw_rumi.marker = 
{
    color: '#47AFFF'
};
tw_rumi.x = [];
tw_rumi.y = [];
tw_rumi.text = [];
tw_rumi.textfont = 
{
    color: 'white'
};
for(let i=0;i<vt03_rumi.length;i++)
{
    tw_rumi.x[i] = vt03_rumi[i][0];
    tw_rumi.y[i] = vt03_rumi[i][1];
    tw_rumi.text[i] = vt03_rumi[i][2];
}

//lan
let tw_lan = {}; 
tw_lan.mode = "lines+markers"; //diff
tw_lan.type = "scatter";
tw_lan.name = "森森鈴蘭/Lily Linglan"; 
tw_lan.marker = 
{
    color: '#9734AD'
};
tw_lan.x = [];
tw_lan.y = [];
tw_lan.text = [];
for(let i=0;i<vt04_lanLA.length;i++)
{
    tw_lan.x[i] = vt04_lanLA[i][0];
    tw_lan.y[i] = vt04_lanLA[i][1];
    tw_lan.text[i] = vt04_lanLA[i][2];
}

let data = [];
data.push(tw_miru);
data.push(tw_ruroro);
data.push(tw_rumi);
data.push(tw_lan);

let layout =  //排版
{
    height:500,
    weight:700,
    margin:{
        t:40 //邊距
    }, 
    xaxis:{
        range:[0, 10], //x軸範圍
        title: "2023 __月份"
    },
    yaxis:{
        range:[0, 12000], //y軸範圍
        title: "訂閱增加數"
    },
    title: "2023/1-10月台V訂閱成長人數" //圖表標題
};
Plotly.newPlot(myGraph, data, layout);

let myGraph1_2 = document.getElementById('myGraph1_2');

//anninmiru
let tw_miru_all = {}; //trace 指定圖形與資料
tw_miru_all.mode = "lines+markers"; //diff 模式+直接顯示在畫面的文字
tw_miru_all.type = "scatter";
tw_miru_all.name = "Annin Miru Channel"; //取名
tw_miru_all.marker =  //粗細
{
    size:10,
    color:'#7C7050'
};
tw_miru_all.domain = 
{
    row: 0,
    column: 0
};
tw_miru_all.x = [];
tw_miru_all.y = [];
tw_miru_all.text = []; //資料點名字list
tw_miru_all.textposition = "bottom center"; //文字(名字)顯示位置
tw_miru_all.textfont = { //set
    family:"Raleway, sans-serif", //font
    size:10 //size
};
for(let i=0;i<vt1_miru.length;i++)
{
    tw_miru_all.x[i] = vt1_miru[i][0];
    tw_miru_all.y[i] = vt1_miru[i][1];
    tw_miru_all.text[i] = vt1_miru[i][2]; //資料點的名字呈現出來(data_twsub.js)
}

//ruroro
let tw_ruroro_all = {};
tw_ruroro_all.mode = "lines+markers"; //diff
tw_ruroro_all.type = "scatter";
tw_ruroro_all.name = "璐洛洛 Ruroro"; 
tw_ruroro_all.marker = 
{
    color: '#3C904E'
};
tw_ruroro_all.domain = 
{
    row: 0,
    column: 1
};
tw_ruroro_all.x = [];
tw_ruroro_all.y = [];
tw_ruroro_all.text = [];
for(let i=0;i<vt2_ruroro.length;i++)
{
    tw_ruroro_all.x[i] = vt2_ruroro[i][0];
    tw_ruroro_all.y[i] = vt2_ruroro[i][1];
    tw_ruroro_all.text[i] = vt2_ruroro[i][2];
}

//rumi
let tw_rumi_all = {}; 
tw_rumi_all.mode = "lines+markers"; //diff
tw_rumi_all.type = "scatter";
tw_rumi_all.name = "Rumi ch. 懶貓子"; 
tw_rumi_all.marker = 
{
    color: '#47AFFF'
};
tw_rumi_all.domain = 
{
    row: 1,
    column: 0
};
tw_rumi_all.x = [];
tw_rumi_all.y = [];
tw_rumi_all.text = [];
tw_rumi_all.textfont = 
{
    color: 'white'
};
for(let i=0;i<vt3_rumi.length;i++)
{
    tw_rumi_all.x[i] = vt3_rumi[i][0];
    tw_rumi_all.y[i] = vt3_rumi[i][1];
    tw_rumi_all.text[i] = vt3_rumi[i][2];
}

//lan
let tw_lan_all = {}; 
tw_lan_all.mode = "lines+markers"; //diff
tw_lan_all.type = "scatter";
tw_lan_all.name = "森森鈴蘭/Lily Linglan"; 
tw_lan_all.marker = 
{
    color: '#9734AD'
};
tw_lan_all.domain = 
{
    row: 1,
    column: 1
};
tw_lan_all.x = [];
tw_lan_all.y = [];
tw_lan_all.text = [];
for(let i=0;i<vt4_lanLA.length;i++)
{
    tw_lan_all.x[i] = vt4_lanLA[i][0];
    tw_lan_all.y[i] = vt4_lanLA[i][1];
    tw_lan_all.text[i] = vt4_lanLA[i][2];
}

let data_twsub = [];
data_twsub.push(tw_miru_all);
data_twsub.push(tw_ruroro_all);
data_twsub.push(tw_rumi_all);
data_twsub.push(tw_lan_all);

let layout_twsub =  //排版
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
        range:[14000, 45000], //y軸範圍
        title: "訂閱增加數"
    },
    grid:{
        rows: 2,
        columns: 2
    },
    title: "2023/1-10月台V訂閱成長人數" //圖表標題
};
Plotly.newPlot(myGraph1_2, data_twsub, layout_twsub);

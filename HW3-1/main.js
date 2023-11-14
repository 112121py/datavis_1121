let myGraph4 = document.getElementById('myGraph4');

//total sc
let sc_gsum = {}; //trace 指定圖形與資料
sc_gsum.type = "pie";

sc_gsum.labels = [];
sc_gsum.title = "各組sc總收益";
sc_gsum.title.size = 20;
sc_gsum.values = [];
sc_gsum.hole = 0.5 ;//dig hole
sc_gsum.domain = { //要放在哪裡
    row:0,
    column:0
};
sc_gsum.marker = {
    colors:['#DC93A3', '#9AD5A7', '#99D3FF'],
    size: 12
};

// sc_gsum.textfont = 
// {
//     color : 'white'
// };

for(let x=0;x<sc_gtotal.length;x++)
{
    sc_gsum.labels[x] = sc_gtotal[x]['name'];
    sc_gsum.values[x] = sc_gtotal[x]['count'];
}

let sc_gavrg = {}; //trace 指定圖形與資料
sc_gavrg.type = "pie";
sc_gavrg.labels = [];
sc_gavrg.title = "各組平均收益";
sc_gavrg.hole = 0.5 ;//dig hole
sc_gavrg.values = [];
sc_gavrg.domain = {
    row:0,
    column:1
};
sc_gavrg.marker = {
    colors:['#DC93A3', '#9AD5A7', '#99D3FF'],
    size: 12
};

// sc_gavrg.textfont = 
// {
//     color : 'white'
// };

for(let x=0;x<sc_gavg.length;x++)
{
    sc_gavrg.labels[x] = sc_gavg[x]['name'];
    sc_gavrg.values[x] = sc_gavg[x]['count'];
}

let data_gsc = [];
data_gsc.push(sc_gsum);
data_gsc.push(sc_gavrg);

let layout_gsc =  //排版
{
    title: "Hololive各組2021super chat收益占比",
    margin:{
        t:30, //邊距
        l:5,
    },
    grid:{  //先做就可以邊做邊看4個圖形成 總共幾欄幾列
        rows:1,
        columns:2
    }
};
Plotly.newPlot(myGraph4, data_gsc, layout_gsc);

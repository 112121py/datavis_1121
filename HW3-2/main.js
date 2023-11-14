let myGraph5 = document.getElementById('myGraph5');

//total sc
let sc_sum = {}; //trace 指定圖形與資料
sc_sum.type = "pie";

sc_sum.labels = [];
sc_sum.title = "各組各期sc總收益";
sc_sum.title.size = 20;
sc_sum.values = [];
sc_sum.hole = 0.5 ;//dig hole
sc_sum.domain = { //要放在哪裡
    row:0,
    column:0
};
sc_sum.marker = {
    colors:['#FAEFF1', '#F0D1D7', '#E6B2BD', '#DC93A3', '#D27489', '#C8566E', '#B93C57', '#9A3249', '#9AD5A7', '#99D3FF', '#70C1FF'],
    size: 12
};

// sc_sum.textfont = 
// {
//     color : 'white'
// };

for(let x=0;x<sc_total.length;x++)
{
    sc_sum.labels[x] = sc_total[x]['name'];
    sc_sum.values[x] = sc_total[x]['count'];
}

let sc_avrg = {}; //trace 指定圖形與資料
sc_avrg.type = "pie";
sc_avrg.labels = [];
sc_avrg.title = "各組各期平均收益";
sc_avrg.hole = 0.5 ;//dig hole
sc_avrg.values = [];
sc_avrg.domain = {
    row:0,
    column:1
};

// sc_avrg.textfont = 
// {
//     color : 'white'
// };

for(let x=0;x<sc_avg.length;x++)
{
    sc_avrg.labels[x] = sc_avg[x]['name'];
    sc_avrg.values[x] = sc_avg[x]['count'];
}

let data_sc = [];
data_sc.push(sc_sum);
data_sc.push(sc_avrg);

let layout_sc =  //排版
{
    title: "Hololive各組各期2021super chat收益占比",
    margin:{
        t:30, //邊距
        l:5,
    },
    grid:{  //先做就可以邊做邊看4個圖形成 總共幾欄幾列
        rows:1,
        columns:2
    }
};
Plotly.newPlot(myGraph5, data_sc, layout_sc);

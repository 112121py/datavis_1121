let myGraph3 = document.getElementById('myGraph3');
colors = ['#EFD0CA', '#C1BCAC', '#979B8D',
                     '#5C7457', '#214E34', 'rgb(151, 179, 100)']

//0期生
let team_0_avg = {}; //trace 指定圖形與資料
team_0_avg.type = "bar";
team_0_avg.name = "0期生";

team_0_avg.x = [];
team_0_avg.y = [];

team_0_avg.x[0] = "Hololive JP";
team_0_avg.y[0] = holo_jp_avg[0]['count'];
team_0_avg.text = team_0_avg.y;
team_0_avg.marker = 
{
    color: colors[0],
    //opacity: 0.1
}

//1期生
let team_1_avg = {}; //trace 指定圖形與資料
team_1_avg.type = "bar";
team_1_avg.name = "1期生";

team_1_avg.x = [];
team_1_avg.y = [];

team_1_avg.x[0] = "Hololive JP";
team_1_avg.y[0] = holo_jp_avg[1]['count'];
team_1_avg.x[1] = "Hlolive ID";
team_1_avg.y[1] = holo_id_avg[0]['count'];
team_1_avg.x[2] = "Hlolive EN";
team_1_avg.y[2] = holo_en_avg[0]['count'];
team_1_avg.text = team_1_avg.y;
team_1_avg.textfont = 
{
    color : 'white'
};
team_1_avg.marker = 
{
    color: colors[1]
    //opacity: 0.1
}

//2期生
let team_2_avg = {}; //trace 指定圖形與資料
team_2_avg.type = "bar";
team_2_avg.name = "2期生";

team_2_avg.x = [];
team_2_avg.y = [];

team_2_avg.x[0] = "Hololive JP";
team_2_avg.y[0] = holo_jp_avg[2]['count'];
team_2_avg.x[1] = "Hlolive ID";
team_2_avg.y[1] = holo_id_avg[1]['count'];
team_2_avg.x[2] = "Hlolive EN";
team_2_avg.y[2] = holo_id_avg[1]['count'];
team_2_avg.text = team_2_avg.y;
team_2_avg.marker = 
{
    color: colors[2]
    //opacity: 0.1
}

//3期生
let team_3_avg = {}; //trace 指定圖形與資料
team_3_avg.type = "bar";
team_3_avg.name = "3期生";

team_3_avg.x = [];
team_3_avg.y = [];

team_3_avg.x[0] = "Hololive JP";
team_3_avg.y[0] = holo_jp_avg[3]['count'];
team_3_avg.x[1] = "Hlolive ID";
team_3_avg.y[1] = holo_id_avg[2]['count'];
team_3_avg.x[2] = "Hlolive EN";
team_3_avg.y[2] = holo_id_avg[2]['count'];
team_3_avg.text = team_3_avg.y;
team_3_avg.marker = 
{
    color: colors[3]
    //opacity: 0.1
}

//4期生
let team_4_avg = {}; //trace 指定圖形與資料
team_4_avg.type = "bar";
team_4_avg.name = "4期生";

team_4_avg.x = [];
team_4_avg.y = [];

team_4_avg.x[0] = "Hololive JP";
team_4_avg.y[0] = holo_jp_avg[4]['count'];
team_4_avg.text = team_4_avg.y;
team_4_avg.marker = 
{
    color: colors[4]
    //opacity: 0.1
}

//5期生
let team_5_avg = {}; //trace 指定圖形與資料
team_5_avg.type = "bar";
team_5_avg.name = "5期生";

team_5_avg.x = [];
team_5_avg.y = [];

team_5_avg.x[0] = "Hololive JP";
team_5_avg.y[0] = holo_jp_avg[5]['count'];
team_5_avg.text = team_5_avg.y;
team_5_avg.marker = 
{
    color: colors[5]
    //opacity: 0.1
}

let data3 = [];
data3.push(team_0_avg);
data3.push(team_1_avg);
data3.push(team_2_avg);
data3.push(team_3_avg);
data3.push(team_4_avg);
data3.push(team_5_avg);

let layout3 =  //排版
{
    margin:{
        t:50 //邊距
    },
    xaxis: 
    {
        title: "語言取向分組(JP:日文, ID:印尼, EN:英文)"
    },
    yaxis: 
    {
        title: "youtube頻道各期平均訂閱數"
    },
    opacity: 0.1, 
    title: "Hololive三種語言取向的Vtuber youtube頻道各期平均訂閱數",
    barmode: 'group' //各長條個數單獨顯示
};
Plotly.newPlot(myGraph3, data3, layout3);

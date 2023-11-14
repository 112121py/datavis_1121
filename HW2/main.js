let myGraph2 = document.getElementById('myGraph2');
colors = ['#EFD0CA', '#C1BCAC', '#979B8D',
                     '#5C7457', '#214E34', 'rgb(151, 179, 100)']

//0期生
let team_0 = {}; //trace 指定圖形與資料
team_0.type = "bar";
team_0.name = "0期生";

team_0.x = [];
team_0.y = [];

team_0.x[0] = "Hololive JP";
team_0.y[0] = holo_jp[0]['count'];
team_0.text = team_0.y;
team_0.marker = 
{
    color: colors[0],
    //opacity: 0.1
}

//1期生
let team_1 = {}; //trace 指定圖形與資料
team_1.type = "bar";
team_1.name = "1期生";

team_1.x = [];
team_1.y = [];

team_1.x[0] = "Hololive JP";
team_1.y[0] = holo_jp[1]['count'];
team_1.x[1] = "Hololive ID";
team_1.y[1] = holo_id[0]['count'];
team_1.x[2] = "Hololive EN";
team_1.y[2] = holo_en[0]['count'];
team_1.text = team_1.y;
team_1.textfont = 
{
    color : 'white'
};
team_1.marker = 
{
    color: colors[1]
    //opacity: 0.1
}

//2期生
let team_2 = {}; //trace 指定圖形與資料
team_2.type = "bar";
team_2.name = "2期生";

team_2.x = [];
team_2.y = [];

team_2.x[0] = "Hololive JP";
team_2.y[0] = holo_jp[2]['count'];
team_2.x[1] = "Hololive ID";
team_2.y[1] = holo_id[1]['count'];
team_2.x[2] = "Hololive EN";
team_2.y[2] = holo_id[1]['count'];
team_2.text = team_2.y;
team_2.marker = 
{
    color: colors[2]
    //opacity: 0.1
}

//3期生
let team_3 = {}; //trace 指定圖形與資料
team_3.type = "bar";
team_3.name = "3期生";

team_3.x = [];
team_3.y = [];

team_3.x[0] = "Hololive JP";
team_3.y[0] = holo_jp[3]['count'];
team_3.x[1] = "Hololive ID";
team_3.y[1] = holo_id[2]['count'];
team_3.x[2] = "Hololive EN";
team_3.y[2] = holo_id[2]['count'];
team_3.text = team_3.y;
team_3.marker = 
{
    color: colors[3]
    //opacity: 0.1
}

//4期生
let team_4 = {}; //trace 指定圖形與資料
team_4.type = "bar";
team_4.name = "4期生";

team_4.x = [];
team_4.y = [];

team_4.x[0] = "Hololive JP";
team_4.y[0] = holo_jp[4]['count'];
team_4.text = team_4.y;
team_4.marker = 
{
    color: colors[4]
    //opacity: 0.1
}

//5期生
let team_5 = {}; //trace 指定圖形與資料
team_5.type = "bar";
team_5.name = "5期生";

team_5.x = [];
team_5.y = [];

team_5.x[0] = "Hololive JP";
team_5.y[0] = holo_jp[5]['count'];
team_5.text = team_5.y;
team_5.marker = 
{
    color: colors[5]
    //opacity: 0.1
}

let data2 = [];
data2.push(team_0);
data2.push(team_1);
data2.push(team_2);
data2.push(team_3);
data2.push(team_4);
data2.push(team_5);

let layout2 =  //排版
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
        title: "youtube頻道訂閱數"
    },
    opacity: 0.1, 
    title: "Hololive三種語言取向的Vtuber youtube頻道各期總訂閱數",
    barmode: 'group' //各長條個數單獨顯示
};
Plotly.newPlot(myGraph2, data2, layout2);

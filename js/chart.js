
let donut= document.getElementById('myChartdon').getContext('2d');
let myChart = new Chart(donut, {
    type: 'doughnut',
    data: {
        labels: ["Complaint","Error Report","Succes"],
        datasets: [{
            label: 'Status',
            data: [10,20,15],
            backgroundColor: [
                '#17a2b8',
                '#e60000',
                '#00ff00'
            ]
        }]
    },
    options: {
    }
});

let line = document.getElementById('myChartline').getContext('2d');
let myLineChart = new Chart(line, {
    type: 'line',
    data: {
        labels:["2015","2016","2017","2018","2019","2020"],
        datasets:[{
            label:"Sale",
            data:[120,200,400,240,150,300],
            fill:true,
            backgroundColor:["#e6f2ff"],
            borderWidth:1,
            borderColor:"#17a2b8",
            pointBackgroundColor:"#ffffff"
        }]
    }
    
});
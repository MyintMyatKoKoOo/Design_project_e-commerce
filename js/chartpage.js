let donut= document.getElementById('myChartdon').getContext('2d');
let myDonutChart = new Chart(donut, {
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

let bar = document.getElementById('myChartbar').getContext('2d');
let myBarChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Views',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});
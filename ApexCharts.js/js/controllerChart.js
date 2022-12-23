var options = {
    chart: {
        type: 'bar',
        width: '50%',
        height: '80%'
    },
    series: [{
        type: 'bar',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]

    }, {
        type: 'line',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]

    }, {
        type: 'column',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]

    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
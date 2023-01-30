/* 
Titulo:Gráfica de Area

Objetivo: Los gráficos de áreas permiten identificar tendencias en los datos en el transcurso del tiempo. Son parecidos a 
          los gráficos de líneas, pero se diferencian en que el espacio situado debajo de las líneas está sombreado para que se aprecie 
          mejor la magnitud de las tendencias.

Autores: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya 

*/


var data = generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, {
  min: 60,
  max: 90
});
var options1 = {
  chart: {
    id: "chart2",
    type: "area",
    height: 230,
    foreColor: "#ccc",
    width: '50%',
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#00BAEC"],
  stroke: {
    width: 3
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },
  markers: {
    size: 5,
    colors: ["#000524"],
    strokeColor: "#00BAEC",
    strokeWidth: 3
  },
  series: [
    {
      data: data
    }
  ],
  tooltip: {
    theme: "dark"
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    tickAmount: 4
  }
};

var chart1 = new ApexCharts(document.querySelector("#chart-area"), options1);

chart1.render();

var options2 = {
  chart: {
    id: "chart1",
    height: 130,
    type: "bar",
    width:'50%',
    foreColor: "#ccc",
    brush: {
      target: "chart2",
      enabled: true
    },
    selection: {
      enabled: true,
      fill: {
        color: "#fff",
        opacity: 0.4
      },
      xaxis: {
        min: new Date("27 Jul 2017 10:00:00").getTime(),
        max: new Date("14 Aug 2017 10:00:00").getTime()
      }
    }
  },
  colors: ["#FF0080"],
  series: [
    {
      data: data
    }
  ],
  stroke: {
    width: 2
  },
  grid: {
    borderColor: "#444"
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 2
  }
};

var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);

chart2.render();

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
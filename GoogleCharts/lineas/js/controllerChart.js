/*
Título: Gráfico de líneas con GoogleCharts.
Objetivo: Analizar el comportamiento del gráfico de líneas creado con la biblioteca de GoogleCharts.
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velazco Gonzalez.
*/

google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawTrendlines);

function drawTrendlines() {
  var data = new google.visualization.DataTable();
  //Columnas con datos a evaluar
  data.addColumn('number', 'X');
  data.addColumn('number', 'Perros');
  data.addColumn('number', 'Gatos');
  data.addColumn('number', 'Conejos');

  //Se agregan filas de datos
  data.addRows([
    [0, 0, 0, 0], [1, 10, 5, 13], [2, 23, 15, 36], [3, 17, 9, 16], [4, 18, 10, 10], [5, 9, 5, 9],//[# de dato, Perros, Gatos, Conejos]
    [6, 97, 52, 61], [7, 76, 53, 68], [8, 100, 95, 93], [9, 45, 49, 3], [10, 74, 9, 18],
    [11, 86, 99, 14],
    [12, 13, 72, 21],
    [13, 81, 49, 18],
    [14, 34, 61, 43],
    [15, 56, 81, 69],
    [16, 13, 80, 48],
    [17, 46, 99, 58],
    [18, 82, 51, 44],
    [19, 91, 79, 63],
    [20, 100, 65, 48],
    [21, 25, 19, 75],
    [22, 74, 96, 41],
    [23, 43, 7, 93],
    [24, 25, 13, 23],
    [25, 37, 12, 95],
    [26, 43, 12, 94],
    [27, 51, 48, 51],
    [28, 35, 39, 26],
    [29, 25, 53, 56],
    [30, 17, 92, 91],
    [31, 13, 22, 51],
    [32, 85, 21, 39],
    [33, 80, 49, 39],
    [34, 27, 87, 67],
    [35, 93, 83, 11],
    [36, 23, 11, 51],
    [37, 61, 19, 96],
    [38, 81, 79, 92],
    [39, 2, 70, 15],
    [40, 100, 39, 58],
    [41, 22, 63, 54],
    [42, 76, 97, 83],
    [43, 35, 53, 94],
    [44, 7, 91, 10],
    [45, 44, 95, 48],
    [46, 13, 45, 31],
    [47, 67, 1, 57],
    [48, 94, 16, 14],
    [49, 83, 31, 26],
    [50, 7, 30, 53],
    [51, 18, 76, 42],
    [52, 14, 88, 86],
    [53, 84, 100, 52],
    [54, 85, 87, 4],
    [55, 51, 73, 26],
    [56, 7, 13, 98],
    [57, 31, 64, 46],
    [58, 1, 91, 80],
    [59, 15, 2, 86],
    [60, 22, 92, 29],
    [61, 65, 27, 92],
    [62, 47, 71, 25],
    [63, 60, 47, 90],
    [64, 38, 45, 22],
    [65, 27, 86, 92],
    [66, 87, 18, 49],
    [67, 44, 38, 27],
    [68, 26, 54, 46],
    [69, 42, 23, 13],
  ]);

  var options = {
    hAxis: {
      title: 'Tiempo'
    },
    vAxis: {
      title: 'Popularidad'
    },
    colors: ['#AB0D06', '#007329', '#F5E605'],
    //Extras para visualizar el crecimiento
    trendlines: {
      0: { type: 'exponential', color: '#333', opacity: 1 },
      1: { type: 'linear', color: '#111', opacity: .3 },
      2: { type: 'exponential', color: 'black', opacity: .5 }
    },
    animation: {
      "startup": true,//Tipo de animación
      duration: 3000,//Duración en milisegundos
    }
  };


  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
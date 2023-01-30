/*
Título: Gráfico heatmap sencillo,
Objetivo: Observar el comportamiento de un gráfico de heatmap con elementos sencillos.
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velasco González
*/
var options = {
   series: [{
   name: 'Metric1',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric2',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric3',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric4',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric5',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric6',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric7',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric8',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric9',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 }
 ],
   chart: {
   height: 350,
   type: 'heatmap',
 },
 dataLabels: {
   enabled: false
 },
 colors: ["#008FFB"],
 title: {
   text: 'HeatMap Chart (Single color)'
 },
 };

 var chart = new ApexCharts(document.querySelector("#chart"), options);
 chart.render();



 function generateData(count, yrange) {//Función necesaria para los datos
  var i = 0;
  var series = [];

  while (i < count) {
    var x = 'w' + (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}
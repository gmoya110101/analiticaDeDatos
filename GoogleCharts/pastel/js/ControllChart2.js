/* 
TITULO: GRÁFICA DE PASTEL OCUPANDO UNA OPCION LLAMADA pieStartAngle: 

OBJETIVO:Aquí, rotaremos el gráfico 100 grados en el sentido de las manecillas del reloj 
               con una opción de pieStartAngle: 100. (Entonces, se elige porque ese ángulo en particular 
              hace que la etiqueta "italiana" se ajuste a la porción).

AUTORES: ALAN MITCHELL VELASCO GONZÁLEZ, GERARDO ITURRIBARIA MOYA 

*/



google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Language', 'Speakers (in millions)'],
    ['German',  5.85],
    ['French',  1.66],
    ['Italian', 0.316],
    ['Romansh', 0.0791]
  ]);

var options = {
  width: 600,
<<<<<<< HEAD
  height: 400,
=======
  height: 500,
>>>>>>> 1a9a6a0ba73f8fde3bd60019bf236d4ede194824
  legend: 'none',
  pieSliceText: 'label',
  title: 'Swiss Language Use (100 degree rotation)',
  pieStartAngle: 360, //rotamos la gráfica 
};

  var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
  chart.draw(data, options);
}
/* 
TITULO: crear un gráfico circular en 3D

OBJETIVO: Si configuras la opción is3D en true, el gráfico circular se dibujará como si tuviera tres dimensiones:

AUTORES: ALAN MITCHELL VELASCO GONZÁLEZ, GERARDO ITURRIBARIA MOYA 

*/



google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          is3D: true,//HACER GRÁFICA 3D
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
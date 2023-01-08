/* 
TITULO: GRÁFICA DE ANILLO

OBJETIVO: Un gráfico de donas es un gráfico circular con un orificio en el centro. Puedes crear gráficos de anillo con la opción pieHole:

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
          pieHole: 0.4, //OPCION PARA CREAR EL ANILLO
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
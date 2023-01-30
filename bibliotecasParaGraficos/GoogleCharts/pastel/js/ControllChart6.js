/* 
TITULO: Gráfico de pastel

OBJETIVO: Un gráfico circular que se procesa dentro 
          del navegador mediante SVG o VML Muestra 
          la información sobre la herramienta cuando
          se desplaza el cursor sobre secciones.

AUTORES: ALAN MITCHELL VELASCO GONZÁLEZ, GERARDO ITURRIBARIA MOYA 

*/




google.charts.load('current', {'packages':['corechart']});
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
          width: 600,
          height: 500,
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

        chart.draw(data, options);
      }
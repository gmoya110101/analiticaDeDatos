/* 
TITULO: Quitar secciones

OBJETIVO: Para omitir una porción, cambia el color a 'transparent':

AUTORES: ALAN MITCHELL VELASCO GONZÁLEZ, GERARDO ITURRIBARIA MOYA 

*/



google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Pac Man', 'Percentage'],
          ['', 75],
          ['', 25]
        ]);

        var options = {
          width: 600,
          height: 500,
          legend: 'none',
          pieSliceText: 'none',
          pieStartAngle: 135,
          tooltip: { trigger: 'none' },
          slices: {
            0: { color: 'yellow' },
            1: { color: 'transparent' }
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('pacman'));
        chart.draw(data, options);
      }
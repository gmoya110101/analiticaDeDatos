/* 
TITULO: GRÁFICA DE PASTEL OCUPANDO UNA OPCION LLAMADA pieHole

OBJETIVO: Aquí, rotaremos el gráfico 100 grados en el sentido de las manecillas del reloj 
               con una opción de pieStartAngle: 100. (Entonces, se elige porque ese ángulo en particular 
              hace que la etiqueta "italiana" se ajuste a la porción).

AUTORES: ALAN MITCHELL VELASCO GONZÁLEZ, GERARDO ITURRIBARIA MOYA 

*/




google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Effort', 'Amount given'],
          ['My all',     100],
        ]);

        var options = {
          pieHole: 0.5,//hacer más ancha la gráfica
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }
/* 
TITULO: GRÁFICA DE PASTEL OCUPANDO "offset"

OBJETIVO: Para separar una porción, crea un objeto slices y 
             asigna al número de porción correspondiente un offset
             entre 0 y 1. A continuación, asignamos desplazamientos
             progresivamente más grandes a las porciones 4 (guyaratí), 
             12 (maratí), 14 (oriya) y 15 (panyabí):

AUTORES: ALAN MITCHELL VELASCO GONZÁLEZ, GERARDO ITURRIBARIA MOYA 

*/


google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([ //DATOS DENTRO DE UN ARREGLO
          ['Language', 'Speakers (in millions)'],
          ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
          ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 100],
          ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
          ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
          ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
          ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
          ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
        ]);

        var options = {
          title: 'Indian Language Use',
          legend: 'none',//o top //Etiqueta los datos que se encuentran en la gráfica
          
          /*
"bottom": Muestra la leyenda debajo del gráfico.
"labeled": Dibuja líneas que conectan porciones sus valores de datos.
"left": Muestra la leyenda ubicada a la izquierda del gráfico.
"none": No muestra ninguna leyenda.
"derecha": Muestra la leyenda a la derecha del gráfico.
"top": Muestra la leyenda sobre el gráfico.
          */
          pieSliceText: 'label',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
          },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
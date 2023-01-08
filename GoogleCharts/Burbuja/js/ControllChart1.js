/* 
TITULO: GRÁFICA DE burbuja

OBJETIVO: Un gráfico de burbujas que se renderiza dentro del navegador mediante SVG o VML. Muestra sugerencias al desplazarse sobre las burbujas.
          Se utiliza un gráfico de burbujas para visualizar un conjunto de datos de dos a cuatro dimensiones. Las primeras dos dimensiones 
          se visualizan como coordenadas, la tercera como color y la cuarta como tamaño.
          
          
        
AUTORES: ALAN MITCHELL VELASCO GONZÁLEZ, GERARDO ITURRIBARIA MOYA 

*/

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
        ['ID', 'Esperanza de vida', 'Tasa de fertibilidad', 'Region',     'poblacion'],
        ['CAN',    80.66,              1.67,      'North America',  33739900],
        ['DEU',    79.84,              1.36,      'Europe',         81902307],
        ['DNK',    78.6,               1.84,      'Europe',         5523095],
        ['EGY',    72.73,              2.78,      'Middle East',    79716203],
        ['GBR',    80.05,              2,         'Europe',         61801570],
        ['IRN',    72.49,              1.7,       'Middle East',    73137148],
        ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
        ['ISR',    81.55,              2.96,      'Middle East',    7485600],
        ['RUS',    68.6,               1.54,      'Europe',         141850000],
        ['USA',    78.09,              2.05,      'North America',  307007000]
      ]);

      var options = {
        title: 'Tasa de fertilidad vs esperanza de vida en países seleccionados (2010).'+
          ' X=esperanza de vida, Y=fertilidad, tamaño de burbuja=población, color de burbuja=región',
        hAxis: {title: 'Esperanza de vida'},
        vAxis: {title: 'Tasa de fertibilidad'},
        bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }
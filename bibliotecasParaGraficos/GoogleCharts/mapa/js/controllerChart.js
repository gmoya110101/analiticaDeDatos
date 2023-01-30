google.charts.load('current', {
    'packages': ['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);//Inicializa la gráfica

  function drawRegionsMap() {//Función para agregar la configuración
   
    var data = google.visualization.arrayToDataTable([//Datos a mostrar
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700],
      ['Italy', 600]
    ]);

    var options = {//Opciones
      colorAxis: { colors: ['#FCCA00', '#FC6B00', '63FC00', 'F50505'] },//Para los colores de los países
      legend: {textStyle: {color: 'blue', fontSize: 25}},//Estilos de la etiqueta
      backgroundColor: '#10141C',//Fondo para el mapa
      datalessRegionColor: 'black',//Para las zonas sin dato
      magnifyingGlass: { enable: true, zoomFactor: 100.5 },
      tooltip: { textStyle: { color: '#FF0000' }, showColorCode: true }
    };

    /*Se invoca la gráfica*/
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
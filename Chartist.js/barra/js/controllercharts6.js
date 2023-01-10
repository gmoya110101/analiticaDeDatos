//GRÁFICO DE BARRAS HORIZONTALES

/*
¡Adivina qué! Crear gráficos de barras horizontales es tan simple 
como puede ser. No hay un nuevo tipo de gráfico que deba aprender, 
basta con pasar una opción adicional.

Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/

new Chartist.Bar('.ct-chart', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [
      [5, 4, 3, 7, 5, 10, 3], //datos de la primera gráfica
      [3, 2, 9, 5, 4, 6, 4]//datos de la segunda gráfica
    ]
  }, {
    seriesBarDistance: 10,//distancia entre gráficas
    reverseData: true, //las etiquetas cambian de posicion (lo que esta en y poniendo "false")
    horizontalBars: true, //"se pasa lo que esta en X a Y"
    axisY: {
      offset: 70
    }
  });
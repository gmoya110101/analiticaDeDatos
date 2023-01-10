//CONFIGURACIÓN DE RESPUESTA EXTREMA

/*
Como todas las configuraciones de un gráfico se pueden personalizar 
con el mecanismo de anulación de configuración receptiva de Chartist, 
¡puede crear un gráfico que se adapte a todas las condiciones de los 
medios!

Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/

new Chartist.Bar('.ct-chart', {
  labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
  series: [
    [5, 4, 3, 7],//datos de la primera gráfica
    [3, 2, 9, 5],//datos de la segunda gráfica
    [1, 5, 8, 4],//datos de la tercera gráfica
    [2, 3, 4, 6],//datos de la cuarta  gráfica
    [4, 1, 2, 1]//datos de la quinta gráfica
  ]
}, {
  // Configuración móvil por defecto
  stackBars: true,
  axisX: {
    labelInterpolationFnc: function(value) {
      return value.split(/\s+/).map(function(word) {
        return word[0];
      }).join('');
    }
  },
  axisY: {
    offset: 20
  }
}, [
  //Anulación de opciones para medios > 400 px
  ['screen and (min-width: 400px)', {
    reverseData: true,
    horizontalBars: true,
    axisX: {
      labelInterpolationFnc: Chartist.noop
    },
    axisY: {
      offset: 60
    }
  }],
  // Anulación de opciones para medios > 800 px
  ['screen and (min-width: 800px)', {
    stackBars: false,
    seriesBarDistance: 10
  }],
  //Anulación de opciones para medios > 1000 px
  ['screen and (min-width: 1000px)', {
    reverseData: false,
    horizontalBars: false,
    seriesBarDistance: 15
  }]
]);
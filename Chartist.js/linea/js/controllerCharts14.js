//ANULACIONES DE SERIE

/*
Al nombrar su serie usando la notación de objeto de serie con una 
propiedad de nombre, puede habilitar la configuración individual 
de las configuraciones específicas de la serie. showLine, showPoint, 
showArea¡e incluso la función de suavizado se puede anular por serie! 
¿Y adivina qué? ¡Incluso puede anular la configuración de la serie en 
la configuración receptiva! Consulte el código de ejemplo para obtener 
más detalles.

Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/
var chart = new Chartist.Line('.ct-chart', {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
// Nombrar la serie con la notación de matriz de objetos de serie
series: [{
    name: 'series-1',
    data: [5, 2, -4, 2, 0, -2, 5, -3]
  }, {
    name: 'series-2',
    data: [4, 3, 5, 3, 1, 3, 6, 4]
  }, {
    name: 'series-3',
    data: [2, 4, 3, 1, 4, 5, 3, 2]
  }]
}, {
  fullWidth: true,

// Dentro de las opciones de series puedes usar los nombres de las series
  // para especificar la configuración que solo se usará para el
  // serie específica.
  series: {
    'series-1': {
      lineSmooth: Chartist.Interpolation.step()
    },
    'series-2': {
      lineSmooth: Chartist.Interpolation.simple(),
      showArea: true
    },
    'series-3': {
      showPoint: false
    }
  }
}, [

// Incluso puede usar anulaciones de configuración receptivas para
  // ¡personaliza aún más la configuración de tu serie!
  ['screen and (max-width: 320px)', {
    series: {
      'series-1': {
        lineSmooth: Chartist.Interpolation.none()
      },
      'series-2': {
        lineSmooth: Chartist.Interpolation.none(),
        showArea: false
      },
      'series-3': {
        lineSmooth: Chartist.Interpolation.none(),
        showPoint: true
      }
    }
  }]
]);
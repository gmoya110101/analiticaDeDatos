//ETIQUETAS DE VARIAS LÍNEAS

/*
Chartist averiguará si su navegador es compatible con ForeignObject
 y los utilizará para crear etiquetas basadas en elementos de texto 
 HTML normales. ¡Los estilos CSS multilínea y regulares son solo dos 
 de los muchos beneficios al usar ForeignObjects!

 Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/
new Chartist.Bar('.ct-chart4', {
  labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
  series: [
    [60000, 40000, 80000, 70000], //valores de la primera gráfica
    [40000, 30000, 70000, 65000],//valores de la segunda gráfica
    [8000, 3000, 10000, 6000]//valores de la tercera gráfica
  ]
}, {
  width:500,
  height:700,
  seriesBarDistance: 10,//distancia entre graficas
  axisX: {
    offset: 80//permite recuperar la posición actual de un elemento (específicamente su cuadro de borde, que excluye los márgenes) en relación con el documento.
  },
  axisY: {
    offset: 80,//permite recuperar la posición actual de un elemento (específicamente su cuadro de borde, que excluye los márgenes) en relación con el documento.
    labelInterpolationFnc: function(value) {
      return value + ' CHF'
    },
    scaleMinSpace: 15
  }
});

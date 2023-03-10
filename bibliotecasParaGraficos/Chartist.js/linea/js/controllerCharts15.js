//SERIE TEMPORAL CON MOMENT.JS

/*
Este ejemplo usa Moment.js en la función de interpolación de etiquetas 
para dar formato a un objeto de fecha. El eje fijo asegura que haya un 
espacio correcto entre los puntos de datos, y el número de etiquetas 
está determinado por el divisor.

Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/
var chart = new Chartist.Line('.ct-chart15', {
  series: [
    {
      name: 'series-1',
      data: [
        { x: new Date(143134652600), y: 53 },
        { x: new Date(143234652600), y: 40 },
        { x: new Date(143340052600), y: 45 },
        { x: new Date(143366652600), y: 40 },
        { x: new Date(143410652600), y: 20 },
        { x: new Date(143508652600), y: 32 },
        { x: new Date(143569652600), y: 18 },
        { x: new Date(143579652600), y: 11 }
      ]
    },
    {
      name: 'series-2',
      data: [
        { x: new Date(143134652600), y: 53 },
        { x: new Date(143234652600), y: 35 },
        { x: new Date(143334652600), y: 30 },
        { x: new Date(143384652600), y: 30 },
        { x: new Date(143568652600), y: 10 }
      ]
    }
  ]
}, {


  width: 600,
  heigth: 600,
  axisX: {
    type: Chartist.FixedScaleAxis,
    divisor: 5,
    labelInterpolationFnc: function (value) {
      return moment(value).format('MMM Do YY');
    }


  }
});

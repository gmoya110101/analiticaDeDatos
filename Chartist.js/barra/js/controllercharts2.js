//BARRAS SUPERPUESTAS EN EL MÓVIL

/*
Este ejemplo utiliza la interpolación de etiquetas y la propiedad 
seriesBarDistance que le permite hacer que las barras se superpongan
 entre sí. Esto se puede usar para usar mejor el espacio disponible 
 en el móvil. Cambie el tamaño de su navegador para ver el efecto de 
 la configuración receptiva.
*/

var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], //valores de la primera gráfica
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4] //valores de la segunda gráfica
    ]
  };
  
  var options = {
    seriesBarDistance: 10 //separacion entre graficas
  };
  
  var responsiveOptions = [
    ['screen and (max-width: 640px)', { 
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  
  new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
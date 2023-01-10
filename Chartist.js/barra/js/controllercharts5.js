//GRÁFICO DE BARRAS APILADAS

/*
También puede configurar su gráfico de barras para apilar las barras 
de la serie una encima de la otra fácilmente usando la stackBarspropiedad
 en su configuración.

 Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/

new Chartist.Bar('.ct-chart', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      [800000, 1200000, 1400000, 1300000],//datos de la primera gráfica
      [200000, 400000, 500000, 300000],//datos de la segunda gráfica
      [100000, 200000, 400000, 600000]//datos de la tercera gráfica
    ]
  }, {
    stackBars: true,//las graficas se desalinean si esa en false
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value / 1000) + 'k';
      }
    }
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });
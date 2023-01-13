//lineas con configuraciones receptivas

/*
Este ejemplo avanzado utiliza un gráfico de líneas para dibujar 
un diagrama de dispersión. El objeto de datos se crea con un mecanismo 
aleatorio de estilo funcional. Hay una primera configuración de respuesta
 móvil que usa las opciones de respuesta para mostrar menos etiquetas en
  pantallas pequeñas.

  Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/
var times = function(n) {
    return Array.apply(null, new Array(n));
  };
  
  var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
    data.labels.push(index + 1);
    data.series.forEach(function(series) {
      series.push(Math.random() * 100)
    });
  
    return data;
  }, {
    labels: [],
    series: times(4).map(function() { return new Array() })
  });
  
  var options = {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 13 === 0 ? 'W' + value : null;
      }
    },
    width: 600,
    heigth: 600
  };
  
  var responsiveOptions = [
    ['screen and (min-width: 640px)', {
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 4 === 0 ? 'W' + value : null;
        }
      }
    }]
  ];
  
  new Chartist.Line('.ct-chart7', data, options, responsiveOptions);

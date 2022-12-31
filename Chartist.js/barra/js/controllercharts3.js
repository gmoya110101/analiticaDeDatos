//AGREGUE CÍRCULOS DE PICO USANDO LOS EVENTOS DE DIBUJO

/*
Con la ayuda de los eventos de dibujo, podemos agregar una 
forma SVG personalizada al pico de nuestras barras.
*/

// Create a simple bi-polar bar chart
var chart = new Chartist.Bar('.ct-chart', {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]//datos de la gráfica
    ]
  }, {
    high: 10, //valores en y positivos
    low: -10,//valores en y negativos
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  });
  
  // eventos de dibujo en el gráfico de barras
  chart.on('draw', function(data) {
    // Si este evento de sorteo es de tipo barra, podemos usar los datos para crear contenido adicional
    if(data.type === 'bar') {
      // Usamos el elemento de grupo de la serie actual para agregar un círculo simple con las coordenadas de la vista de la barra y un radio del círculo que depende del valor
      data.group.append(new Chartist.Svg('circle', {
        cx: data.x2,
        cy: data.y2,
        r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
      }, 'ct-slice-pie'));
    }
  });
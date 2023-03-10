//GRÁFICO DE BARRAS BIPOLAR

/*
Un gráfico de barras bipolar con un límite de rango establecido con 
alto y bajo. También hay una función de interpolación que se utiliza 
para omitir todas las líneas/etiquetas impares de la cuadrícula.

Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/

var data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2] //valor de la gráfica
    ]
  };
  
  var options = {
    width:500,
    height:700,
    high: 10, //valores en y positivos
    low: -10, //valores en y negativos 
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  };
  
  new Chartist.Bar('.ct-chart', data, options);
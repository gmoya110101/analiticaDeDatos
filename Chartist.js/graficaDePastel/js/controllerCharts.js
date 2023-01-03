/*
Título: Gráfico de pastel.
Objetivo: Observar el comportamiento del gráfico de pastel con características sencillas.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.
*/

var data = {
  series: [5, 3, 4]
};

var sum = function (a, b) { return a + b };

new Chartist.Pie('.ct-chart', data,
options = {
  width: 300, //configurar el tamaño de la gráfica
  height: 200
}, {
  labelInterpolationFnc: function (value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  },

});
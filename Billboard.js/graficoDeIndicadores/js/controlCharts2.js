/*

Título: Gráfico de indicadores con longitud de arco.
Objetivo: Observar el comportamiento del gráfico de indicadores con longitud de arco.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.

*/

var chart = bb.generate({
  data: {
    columns: [
	["data0", 25],
	["data1", 50],
	["data2", 75],
	["data3", 100]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    type: "single",
    max: 100,
    min: 0,
    fullCircle: true,
    arcLength: 100//Para el tamaño inicial 
  },
  size: {
    height: 300
  },
  bindto: "#gaugeArcLength"
});

//Funciones para la animación
setTimeout(function() {
	chart.config("gauge.arcLength", 75, false);
	chart.flush(true);
}, 2000);

setTimeout(function() {
	chart.config("gauge.arcLength", 50, false);
	chart.flush(true);
}, 4000);

setTimeout(function() {
	chart.config("gauge.arcLength", 25, false);
	chart.flush(true);
}, 6000);

setTimeout(function() {
	chart.config("gauge.arcLength", -25, false);
	chart.flush(true);
}, 8000);

setTimeout(function() {
	chart.config("gauge.arcLength", -50, false);
	chart.flush(true);
}, 10000);

setTimeout(function() {
	chart.config("gauge.arcLength", -75, false);
	chart.flush(true);
}, 12000);

setTimeout(function() {
	chart.config("gauge.arcLength", -100, false);
	chart.flush(true);
}, 14000);
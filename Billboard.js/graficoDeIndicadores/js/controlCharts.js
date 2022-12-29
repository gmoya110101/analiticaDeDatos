/*

Título: Gráfico de barras.
Objetivo: Observar el comportamiento de algunas características del gráfico de indicadores.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.

*/

var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
    onclick: function(d, i) {
	console.log("onclick", d, i);
   },
    onover: function(d, i) {
	console.log("onover", d, i);
   },
    onout: function(d, i) {
	console.log("onout", d, i);
   }
  },
  gauge: {
    fullCircle: true,//Para que sea de todo un círculo completo
    label: {//Así pongo alguna etiqueta
      format: function (value, ratio) { return value + "\npor ciento"; },
      extents: function (value, isMax) { return (isMax ? "Max:" : "Min:") + value; }
    }
  },
  color: {
    pattern: [
      "#FF0000",
      "#F97600",
      "#F6C600",
      "#60B044"
    ],
    threshold: {
      values: [
        30,
        60,
        90,
        100
      ]
    }
  },
  size: {
    height: 180
  },
  bindto: "#gaugeChart"
});

//Funciones para hacer el cambio automático de los valores
setTimeout(function() {
	chart.load({
		columns: [["data", 10]]
	});
}, 1000);

setTimeout(function() {
	chart.load({
		columns: [["data", 50]]
	});
}, 2000);

setTimeout(function() {
	chart.load({
		columns: [["data", 70]]
	});
}, 3000);

setTimeout(function() {
	chart.load({
		columns: [["data", 0]]
	});
}, 4000);

setTimeout(function() {
	chart.load({
		columns: [["data", 100]]
	});
}, 5000);
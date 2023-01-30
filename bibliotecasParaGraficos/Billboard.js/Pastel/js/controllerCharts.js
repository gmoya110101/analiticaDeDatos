/*
Título: Gráfico de pastel.
Objetivo: Observar el comportamiento de un gráfico de pastel.
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velasco González
*/

// for ESM environment, need to import modules as:
// import bb, {pie} from "billboard.js";

var chart = bb.generate({
  data: {
    columns: [//cambia en cierto tiempo
	["data1", 30],
	["data2", 120]
    ],
    type: "pie", // especificamos el tipo de gráfica
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
  
  bindto: "#pieChart"
});

setTimeout(function() { //cambia en cierto tiempo
	chart.load({
		columns: [
			["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
			["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
			["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
		]
	});
}, 1500);

setTimeout(function() {//cambia en cierto tiempo
	chart.unload({ ids: "data1" });
	chart.unload({ ids: "data2" });
}, 2500);
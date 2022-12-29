/*

Título: Gráfico de indicadores con arco inicial.
Objetivo: Observar el comportamiento del gráfico de indicadores con arco inicial.
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
      type: "multi",//Para que sea múltiple
      max: 100,
      min: 0,
      arcs: {
        minWidth: 5
      },
      fullCircle: false,
      startingAngle: -1.5707963267948966
    },
    size: {
      height: 300
    },
    bindto: "#gaugeStartingAngle"
  });
  
  setTimeout(function() {
      chart.config("gauge.startingAngle", -1, false);
  
      chart.flush(true);
  }, 2000);
  
  setTimeout(function() {
      chart.config("gauge.startingAngle", 1, false);
      chart.flush(true);
  }, 4000);
  
  setTimeout(function() {
      chart.config("gauge.startingAngle", -0.5 * Math.PI, false);
      chart.config("gauge.fullCircle", true, false);
      chart.flush(true);
  }, 6000);
  
  setTimeout(function() {
      chart.config("gauge.startingAngle", 0 * Math.PI, false);
      chart.flush(true);
  }, 8000);
/*

Título: Gráfico de inidicadores con arco múltiple.
Objetivo: Observar el comportamiento del gráfico de indicadores con arco múltiple.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.

*/

var chart = bb.generate({
    data: {
      columns: [
      ["data0", -100],
      ["data1", -50],
      ["data2", -25],
      ["data3", 0],
      ["data4", 25],
      ["data5", 50],
      ["data6", 100]
      ],
      type: "gauge", // for ESM specify as: gauge()
      order: "asc"//Ordena de forma ascendente
    },
    gauge: {
      type: "multi",
      max: 100,
      min: -100,
      arcs: {
        minWidth: 5
      }
    },
    color: {
      pattern: [
        "#FF0000",
        "#FFA500",
        "#FFFF00",
        "#008000",
        "#0000FF",
        "#4B0082",
        "#EE82EE"
      ],
      threshold: {
        values: [
          -50,
          -25,
          0,
          25,
          50,
          75,
          100
        ]
      }
    },
    size: {
      height: 300
    },
    bindto: "#gaugeTypeMulti"
  });
  
  setTimeout(function() {
      chart.load({
          columns: [
              ["data7", -68],
              ["data8", 72],
          ]
      });
  }, 2000);
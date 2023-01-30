/*

Título: Gráfico de indicadores con datos apilados.
Objetivo: Observar el comportamiento del gráfico de indicadores con datos apilados.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.

*/

var chart = bb.generate({
    data: {
      columns: [
      ["data1", 30, 10],
      ["data2", 190],
      ["data3", 70],
      ["data4", 150],
      ["data5", 50]
      ],
      type: "gauge", // for ESM specify as: gauge()
      order: "asc"//Ordena de forma ascendente
    },
    gauge: {
      title: "Title A"
    },
    bindto: "#gaugeStackData_1"
  });
  
  var chart2 = bb.generate({
    data: {
      columns: [
      ["data1", 100],
      ["data2", 150]
      ],
      type: "gauge", // for ESM specify as: gauge()
      order: null
    },
    gauge: {
      max: 500,
      title: "Title B",
      label: {
        format: function(value, ratio) {
              return value;
         }
      },
      width: 80
    },
    legend: {
      show: false
    },
    bindto: "#gaugeStackData_2"
  });
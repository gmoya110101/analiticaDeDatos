/*
Título: Gráfico de barras ordenado.
Objetivo: Observar el comportamiento del gráfico de barras con la función de ordenamiento.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.
Descripción: Se tiene la novedad de que automáticamente se ordenan de mayor a menor de forma
             desendente las barras proyectadas.

*/

var chart = bb.generate({
    data: {
      columns: [
      ["data1", 130, 200, 320, 400, 530, 750],
      ["data2", -130, 10, 130, 200, 150, 250],
      ["data3", -130, -50, -10, -200, -250, -150]
      ],
      type: "bar", // for ESM specify as: bar()
      groups: [
        [
          "data1",
          "data2",
          "data3"
        ]
      ],
      order: "desc"
    },
    grid: {
      y: {
        lines: [
          {
            value: 0
          }
        ]
      }
    },
    bindto: "#dataOrder"
  });
  
  setTimeout(function() {
      chart.load({
          columns: [
              ["data4", 1200, 1300, 1450, 1600, 1520, 1820]
          ]
      });
  }, 1000);
  
  setTimeout(function() {
      chart.load({
          columns: [
              ["data5", 200, 300, 450, 600, 520, 820]
          ]
      });
  }, 2000);
  
  setTimeout(function() {
      chart.groups([
          ["data1", "data2", "data3", "data4", "data5"]
      ]);
  }, 3000);
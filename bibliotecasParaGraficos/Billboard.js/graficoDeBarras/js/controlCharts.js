/*
Título: Gráfico de barras.
Objetivo: Observar el comportamiento de algunas características del gráfico de barras.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.

*/
var chart = bb.generate({
    data: {
      columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 130, 100, 140, 200, 150, 50]
      ],
      type: "bar", // for ESM specify as: bar()
      
      colors: {//Para cambiar el color
        data1: "#0DEED2",
        data2: "#0DEE51",
        data3: "#EE920D"
      },
      labels: {//Pone etiquetas con los datos
        backgroundColors: "yellow",//Fondo de la etiqueta
        colors: "black",//Color de la fuente
        format: {
            data1: function(x) { return d3.format('$')(x); }//Así le puedo dar formato de divisa
            
          }
      }},
    bar: {
      width: {
        ratio: 0.5
        //Pone un ancho a cada barra
        /*data1: 10,
        data2: {
          ratio: 1,
          max: 20
        },
        data3: 30*/
      },
      radius: {//redondea la punta de las gráficas
        ratio: 0.5
      },
      //overlap: true//Sobre pone las gráficas
      padding: 3//Espacio entre barras
    },
    bindto: "#barChart_1"
  });
  
  setTimeout(function() {
          chart.load({
              columns: [
                  ["data3", 130, -150, 200, 300, -200, 100]
              ]
          });
      }, 1000);
  
  var chart2 = bb.generate({
    data: {
      columns: [
      ["data1", -100, 100, 200, [-100, 0],
      [0, 100],
      [100, 200]
      ],
      ["data2", 100, 300, 500, [0, 100],
      [100, 300],
      [200, 500]
      ]],
      type: "bar", // for ESM specify as: bar()
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    bindto: "#barChart_2"
  });
  
  setTimeout(function() {
          chart.load({
              columns: [
                  ["data3", 200, 500, 800, [100, 200], [300, 500], [500, 800]],
              ],
              type: "bar", // for ESM specify as: bar()
          });
      }, 1000);
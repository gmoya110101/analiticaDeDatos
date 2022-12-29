/*
Título: Gráfico de area con la función linearGradient.
Objetivo: Observar el comportamiento del gráfico de barras con la función de linearGradient.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.
Descripción: Se puede observar el gráfico de área pero con el efecto de desvanecido en el área.

*/

var chart = bb.generate({
    data: {
      columns: [
      ["data1", 230, 280, 251, 400, 150, 546, 158],
      ["data2", 130, 357, 151, 400, 250, 250, 395],
      ["data3", 330, 280, 320, 218, 450, 150, 500]
      ],
      type: "area-spline", // for ESM specify as: areaSpline()
      groups: [
        [
          "data1",
          "data2",
          "data3"
        ]
      ]
    },
    area: {
      linearGradient: true
    },
    bindto: "#linearGradient_1"
  });
  
  var chart2 = bb.generate({
    data: {
      columns: [
      ["data1", 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
      ],
      type: "area", // for ESM specify as: area()
    },
    area: {
      linearGradient: {
        x: [
          1,
          0
        ],
        y: [
          0,
          1
        ],
        stops: [
          [
            0,
            function(id) {
       return id == "data1" ? "red" : "yellow";
     },
            1
          ],
          [
            0.3,
            "orange",
            0.5
          ],
          [
            0.6,
            "green",
            0.7
          ],
          [
            0.8,
            "purple",
            0.7
          ],
          [
            1,
            null,
            1
          ]
        ]
      }
    },
    point: {
      focus: {
        only: true
      }
    },
    bindto: "#linearGradient_2"
  });
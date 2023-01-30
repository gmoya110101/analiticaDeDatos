/*
Título: Gráfico de area con la función above.
Objetivo: Observar el comportamiento del gráfico de barras con la función de above.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.
Descripción: Se puede observar el gráfico con dos áreas pero una encima de la otra.

*/
var chart = bb.generate({
  data: {
    columns: [
	["data1", 230, 280, 251, 400, 150, 546, 158],
	["data2", 130, 357, 151, 400, 250, 250, 395]
    ],
    type: "area", // for ESM specify as: area()
    groups: [
      [
        "data1",
        "data2"
      ]
    ]
  },
  area: {
    above: true
  },
  bindto: "#above"
});
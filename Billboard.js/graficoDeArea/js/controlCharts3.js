/*
Título: Gráfico de area con la función bellow.
Objetivo: Observar el comportamiento del gráfico de barras con la función de bellow.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.
Descripción: Se puede hacer la comparativa de como se observa el gráfico de area 
             con valores negativos cuando no se tiene activada la función bellow y como se 
            observa cuando sí está activada.

*/

var chart = bb.generate({
    title: {
      text: "Gráfico de área con valores negativos"
    },
    data: {
      columns: [
      ["data", 230, -280, 251, -400, 150, 546, 158]
      ],
      type: "area", // for ESM specify as: area()
    },
    bindto: "#below_1"
  });
  
  var chart2 = bb.generate({
    title: {
      text: "Gráfico de área con valores negativos y la opción below activada"
    },
    data: {
      columns: [
      ["data", 230, -280, 251, -400, 150, 546, 158]
      ],
      type: "area", // for ESM specify as: area()
    },
    area: {
      below: true
    },
    bindto: "#below_2"
  });
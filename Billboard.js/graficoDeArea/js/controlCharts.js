/*
Título: Gráfico de area.
Objetivo: Observar el comportamiento de algunas características del gráfico de area.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.

*/
var chart = bb.generate({
  data: {
    columns: [
	["data1", 300, 350, 300, 0, 0, 0],
	["data2", 130, 100, 140, 200, 150, 50]
    ],
    types: {
      data1: "area", // for ESM specify as: area()
      data2: "area-spline", // for ESM specify as: areaSpline()
    }
  },
  zoom: {
    enabled: true, // Se activa el zoom para acercar al arrastras el mouse
    type: "drag"
  },
  subchart: {//Crea un mini gráfico a partir del mismo para tener una mejor visión de los datos
    show: true, 
    showHandle: true
  },
  bindto: "#dragZoom",
  bindto: "#areaChart"
});
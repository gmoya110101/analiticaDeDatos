/*
Título: Gráfico de Radar.
Objetivo: Observar el comportamiento de un gráfico de pastel.
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velasco González
*/

// for ESM environment, need to import modules as:
// import bb, {radar} from "billboard.js";

var chart = bb.generate({
    data: {
      x: "x",
      columns: [
      ["x", "Data A", "Data B", "Data C", "Data D", "Data E"],//axis donde irá la descripcion
      ["data1", 330, 350, 200, 380, 150], //datos
      ["data2", 130, 100, 30, 200, 80],//datos
      ["data3", 230, 153, 85, 300, 250]//datos
      ],
      type: "radar", // especificamos el tipo de gráfica
      labels: true //muestra u oculta los datos
    },
    radar: {
      axis: {
        max: 700 //modifica el tamaño de las gráficas
      },
      level: {
        depth: 4 //aumenta o disminuye el numero de cuadriculas
      },
      direction: {
        clockwise: true //invierte la figura modo espejo
      }
      
    },
    bindto: "#radarChart"
  });
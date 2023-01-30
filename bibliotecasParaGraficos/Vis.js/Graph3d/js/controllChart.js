/*
Titulo: Gráficos 3D usando Vis

Objetivo: Identificar el comportamiento de una gráfica en 3D
          utilizanod Vis

Autores: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/


var data = null;
var graph = null;

function custom(x, y, t) {
  return Math.sin(x / 50 + t / 10) * Math.cos(y / 50 + t / 10) * 50 + 50;
}


// Se llama cuando se carga la API de visualización.
function drawVisualization() {
  //Cree y complete una tabla de datos.
  data = new vis.DataSet();
  // crear algunos datos atractivos con sin/cos
  var steps = 25;
  var axisMax = 314;
  var tMax = 31;
  var axisStep = axisMax / steps;
  for (var t = 0; t < tMax; t++) {
    for (var x = 0; x < axisMax; x += axisStep) {
      for (var y = 0; y < axisMax; y += axisStep) {
        var value = custom(x, y, t);
        data.add([{ x: x, y: y, z: value, filter: t, style: value }]);
      }
    }
  }

  // Especificamos las opciones
  var options = {
    width: "600px",
    height: "600px",
    style: "surface",
    showPerspective: true,
    showGrid: true,
    showShadow: false,
    // Mostramos las animaciones: false,
    keepAspectRatio: true,
    verticalRatio: 0.5,
    animationInterval: 100, // milliseconds
    animationPreload: true,
  };

  // Creamos la grafica
  var container = document.getElementById("mygraph");
  graph = new vis.Graph3d(container, data, options);
}

window.addEventListener("load", () => {
  drawVisualization();
});
/**
 * Título: Gráfica de dispersión con Vis.js
 * Objetivo: Observar el comportamiento del gráfico de dispersión.
 * Autores: Gerardo Iturribarria Moya y Alan Mitchell Velasco González
 */

var container = document.getElementById("visualization");
//Para llenar los datos
var items = [];
for (var i = 0; i < 100; i++) {
    items.push({
        x: new Date("2014-06-11").valueOf() + Math.floor(Math.random() * 30000),
        y: 500 + Math.random() * 100,
    });
}

var dataset = new vis.DataSet(items);
var options = {
    sort: false,//Para ordenar
    sampling: false,
    style: "points",
    dataAxis: {
        left: {
            range: {//Valores para el eje
                min: 100,
                max: 900,
            },
        },
    },
    drawPoints: {
        enabled: true,
        size: 10,//Tamaño de los puntos
        style: "square", // Para cambiar la forma => square, circle
    },
    defaultGroup: "Scatterplot",
    height: "500px",
    //width: "600px"//Si no lo pongo, agarra todo el ancho de la página
};
var graph2d = new vis.Graph2d(container, dataset, options);
/*
Título: Prueba de gráficas con D3JS
Objetivo: Observar el comportamiento de las gráficas con la biblioteca D3JS

*/

/*var dataset = []; //Initialize empty array 

for (var i = 0; i < 25; i++) {
    //Loop 25 times 
    var newNumber = Math.round(Math.random() * 30); //New random number (0-30) 
    dataset.push(newNumber); //Add new number to array 
}


d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", (d) => {
        return (d * 5) + "px";
    });;*/

//Diagrama de dispersión

/*const w = 500;
const h = 100;
var dataset = []; //Initialize empty array 

for (var i = 0; i < 25; i++) {
    //Loop 25 times 
    var newNumber = Math.round(Math.random() * 30); //New random number (0-30) 
    dataset.push(newNumber); //Add new number to array 
}
var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")

        .attr("cx", function(d) {
            return d[0];
        })
        .attr("cy", function(d) {
            return d[1];
        })
        .attr("r", 5);
*/
    //Diagrama de barras
const w = 500;
const h = 100;
const barPadding = 1;  // <-- Nueva!
var dataset = []; //Initialize empty array 

for (var i = 0; i < 25; i++) {
    //Loop 25 times 
    var newNumber = Math.round(Math.random() * 30); //New random number (0-30) 
    dataset.push(newNumber); //Add new number to array 
}

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", function (d) {
        return h - d * 4;  //Altura menos el dato, para que vaya de abajo hacia arriba
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", (d) => {
        return d * 4;
    })
    .attr("x", function (d, i) {
        return i * (w / dataset.length);  //Ancho de barras de 20 más 1 espacio 
    })
    .attr("fill", (d) => {
        return "rgb(0, 0, " + (d * 10) + ")";
    });;


svg.selectAll("text")//Para agregar las etiquetas
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("x", function (d, i) {
        return i * (w / dataset.length) + 5;  // +5
    })
    .attr("y", function (d) {
        return h - (d * 4) + 15;              // +15
    })
    .attr("font-family", "sans-serif")//Fuente
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
    });



    
/*const dataset = [5, 10, 15, 20, 25];



d3.select("body").append("svg");

svg.atrr("width", w)//Especifico dimensiones
    .atrr("height", h);

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", (d, i) => {
    return (i * 50) + 25;
    })
    .attr("cy", h / 2)
    .attr("r", (d) => {
        return d;
    });
    */
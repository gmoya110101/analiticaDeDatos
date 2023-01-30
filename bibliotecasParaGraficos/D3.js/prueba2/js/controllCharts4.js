window.addEventListener('load',() =>{
let datos=[53,96,13,9,43,30,19,97,84,3,52,41,24,25,31];
let anchoBarra=27;
let alto=400;

//crear datos de x con d3

let x=d3.scaleLinear().domain([0,d3.max(datos)]).range([0,alto]);

//objeto svg

let svg =d3.select('body').append('svg').attr('width',datos.length * (anchoBarra + 1)).attr('height', alto);

svg.selectAll('rect').data(datos).enter().append('rect').attr('fill','crimson').attr('stroke','red').attr('x',function(d,i){return i*(anchoBarra+1)}).attr('y',function(d){return alto -(x(d))}).attr('width',anchoBarra).attr('height',x);

});

//ventajas de utilizar d3 es el resultado de gráficos escalares 
/*
Título: Gráfico de burbujas.
Objetivo: Analizar el comportamiento del gráfico de burbujas con un par de características.
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velasco González
*/

nv.addGraph(function() {
    var chart = nv.models.scatterChart()
                  .showDistX(true)    //Pone líneas de referencia en los ejes para cada punto
                  .showDistY(true)
                  .color(d3.scale.category10().range());//pone el color
  
    //Pone un tooltip
    chart.tooltipContent(function(key) {
        return '<h3>' + key + '</h3>';
    });
  
    //Configuración de los ejes
    chart.xAxis.tickFormat(d3.format('.02f'));//Pone los decimales deseados
    chart.yAxis.tickFormat(d3.format('.02f'));
  
    var myData = randomData(4,40);//Pone los datos aleatorios
    d3.select('#chart svg')//Prepara el div donde se colocará el gráfico
        .datum(myData)
        .call(chart);
  
    nv.utils.windowResize(chart.update);
  
    return chart;
  });
  
  /**************************************
   * Generador de datos aleatorios
   */
  function randomData(groups, points) { //# grupos,# punto por grupo
    var data = [],
        shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],//Figuras para proyectar los puntos
        random = d3.random.normal();
  
    for (i = 0; i < groups; i++) {
      data.push({
        key: 'Grupo ' + i,
        values: []
      });
  
      for (j = 0; j < points; j++) {
        data[i].values.push({
          x: random()
        , y: random()
        , size: Math.random()   //Tamaño de cada figura
        , shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Sombra para cada punto.
        });
      }
    }
  
    return data;
  }
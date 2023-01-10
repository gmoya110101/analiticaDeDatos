
//En (NVD3) se tiene que utilizar las mismas versiones en las librerias sino no serivrá a la hora de programar 

var drawChart = function() {
  nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    .staggerLabels(true)
    .tooltips(false)
    .showValues(true)

  d3.select('#chart svg')
    .datum(chartData)//donde contiene los datos
    .transition().duration(500)
    .call(chart)
    ;

  nv.utils.windowResize(chart.update);

  return chart;
});

};

$(function() {
$("#btnLoadChart").click(function(){
  console.log('draw chart');
  drawChart();
});
});
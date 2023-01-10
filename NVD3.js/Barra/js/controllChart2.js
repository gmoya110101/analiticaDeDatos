nv.addGraph(function() {
  
    chart = nv.models.historicalBarChart();
  
    chart.x(function(d, i) { return d.x });
        
    // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return
    // themselves, not the parent chart, so need to chain separately
    chart.xAxis 
      .tickFormat(d3.format(',.1f'))
      .axisLabel("Time")
  
    chart.yAxis
      .axisLabel('Random Number')
      .tickFormat(d3.format(',.4f'));
  
    chart
      .showXAxis(true)
      .showYAxis(true)
      .rightAlignYAxis(true)
      .margin({ right: 90 });
  
    d3.select('#chart svg')
        .datum(data)
        .transition()
          .duration(1)
        .call(chart);
  
    nv.utils.windowResize(chart.update);
  
    return chart;
  });
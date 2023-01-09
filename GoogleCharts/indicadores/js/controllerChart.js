google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Memoria', 80],
    ['CPU', 55],
    ['Red', 100]
  ]);

  var options = {
    width: 600, height: 200,
    redFrom: 95, redTo: 100,
    yellowFrom:75, yellowTo: 95,
    minorTicks: 5,
    forceIFrame: 'true',
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 13000);
  setInterval(function() {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 5000);
  setInterval(function() {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 26000);
}
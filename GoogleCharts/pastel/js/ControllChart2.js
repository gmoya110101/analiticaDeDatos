google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Language', 'Speakers (in millions)'],
    ['German',  5.85],
    ['French',  1.66],
    ['Italian', 0.316],
    ['Romansh', 0.0791]
  ]);

var options = {
  legend: 'none',
  pieSliceText: 'label',
  title: 'Swiss Language Use (100 degree rotation)',
  pieStartAngle: 100,
};

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
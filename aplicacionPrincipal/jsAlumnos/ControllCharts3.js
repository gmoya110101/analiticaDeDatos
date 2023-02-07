/*google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawMaterial);

$.ajax({
  url: "controlador/controlador_grafico.php",
  method: "POST",
  dataType: "JSON",
  success: function (data) {
    console.log(data);
    drawMaterial(data);
  }
});

function drawMaterial(chart_data) {
  /* var data = google.visualization.arrayToDataTable([
     ['City', '2010 Population', '2000 Population'],
     ['New York City, NY', 8175000, 8008000],
     ['Los Angeles, CA', 3792000, 3694000],
     ['Chicago, IL', 2695000, 2896000],
     ['Houston, TX', 2099000, 1953000],
     ['Philadelphia, PA', 1526000, 1517000]
   ]);
*/

/*var jsonData = chart_data;
var data = new google.visualization.DataTable();
data.addColumn('string', 'Carrera');
data.addColumn('number', 'total');

$.each(jsonData, function (i, jsonData) {
  var carrera = jsonData.carrera;
  var total = parseInt($.trim(jsonData.total));
  data.addRows([[carrera, total]]);

});


var materialOptions = {
  chart: {
    title: 'Alumnos inscritos por carrera'
  },
  hAxis: {
    title: 'Total',
    minValue: 0,
  },
  vAxis: {
    title: 'Carrera'
  },
  is3D: true
};
var materialChart = new google.charts.PieChart(document.getElementById('chart_div'));
materialChart.draw(data, materialOptions);
}*/

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

$.ajax({
  url: "controlador/controlador_grafico.php",
  method: "POST",
  dataType: "JSON",
  success: function (data) {
    console.log(data);
    drawChart(data);
  }
});

function drawChart(chart_data) {
  /*var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);*/

  var jsonData = chart_data;
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Carrera');
  data.addColumn('number', 'total');

  $.each(jsonData, function (i, jsonData) {
    var carrera = jsonData.carrera;
    var total = parseInt($.trim(jsonData.total));
    data.addRows([[carrera, total]]);

  });

  var options = {
    width: 600,
    height: 500,
    title: 'Alumnos inscritos por carrera',
    is3D: true,//HACER GRÁFICA 3D
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
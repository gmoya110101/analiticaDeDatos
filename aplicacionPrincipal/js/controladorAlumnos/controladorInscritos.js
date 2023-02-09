google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

$.ajax({
  url: "controlador/controladorAlumnos/controladorAlumnosIncritos.php",
  method: "POST",
  dataType: "JSON",
  success: function (data) {
    drawChart(data);
  }
});

function drawChart(chart_data) {
  var jsonData = chart_data;
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Carrera');
  data.addColumn('number', 'Total');

  $.each(jsonData, function (i, jsonData) {
    var carrera = jsonData.carrera;
    var total = parseInt($.trim(jsonData.total));
    data.addRows([[carrera, total]]);
    
  });

  
  var options = {
    width: 700,
    height: 500,
    title: 'Alumnos inscritos por carrera',
    is3D: true,//HACER GRÁFICA 3D
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
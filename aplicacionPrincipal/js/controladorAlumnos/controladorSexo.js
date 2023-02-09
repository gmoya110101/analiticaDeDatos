google.charts.load('current', { packages: ['corechart', 'bar'] });
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);


var tempTitulo = 'Cantidad de alumnos por sexo';
$.ajax({
    url: "controlador/controladorAlumnos/controladorAlumnosPorSexo.php",
    method: "POST",

    dataType: "JSON",
    success: function (data) {
        console.log(data);
        drawChart(data, tempTitulo);
    }
});

function drawChart(chart_data, chart_titulo) {

    var jsonData = chart_data;
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Sexo');
    data.addColumn('number', 'Cantidad');


    $.each(jsonData, function (i, jsonData) {
        var sexo = jsonData.sexo;
        var cantidad = parseInt($.trim(jsonData.total));
        data.addRows([[sexo, cantidad]]);
    });

    var options = {
        title: chart_titulo,
        colors: ['#AB0D06', '#007329', '#F5E605'],
        hAxis: { title: "Nombre" },
        vAxis: { title: "Cantidad" },

    };

    var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));

    chart.draw(data, options);
}
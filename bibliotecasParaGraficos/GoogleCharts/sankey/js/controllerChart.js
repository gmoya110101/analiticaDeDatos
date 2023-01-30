/*
Título: Diagrama de Sankey básico.
Objetivo: Observar el comportamiento del diagrama de Sankey.
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velazco González
*/
google.charts.load('current', { 'packages': ['sankey'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Desde');//Donde empieza
    data.addColumn('string', 'Hasta');//Donde termina
    data.addColumn('number', 'Peso');//Ancho de la línea
    data.addRows([
        ['A', 'X', 5],//Datos a mostrar
        ['A', 'Y', 7],
        ['A', 'Z', 6],
        ['B', 'X', 2],
        ['B', 'Y', 9],
        ['B', 'Z', 4],
        ['C', 'X', 9],
        ['C', 'Y', 1],
        ['C', 'Z', 5],
    ]);

    // Sets chart options.
    var options = {
        width: 600,
    };

    // Instantiates and draws our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chart.draw(data, options);
}
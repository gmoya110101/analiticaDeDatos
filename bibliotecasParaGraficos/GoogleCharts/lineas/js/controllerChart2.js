/* 
Título: Gráfico de líneas editable
Objetivo: Observar el comportamiento del gráfico de líneas con características de edición.
Descripción: Se implementa la opción de configuración en donde hasta se puede cambiar el tipo de 
gráfico.
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velazco González
*/
google.charts.load('current', { packages: ['charteditor'] });
google.charts.setOnLoadCallback(loadEditor);
var chartEditor = null;

function loadEditor() {
    // Create the chart to edit.
    var wrapper = new google.visualization.ChartWrapper({
        'chartType': 'LineChart',
        'dataSourceUrl': 'http://spreadsheets.google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1',
        'query': 'SELECT A,D WHERE D > 100 ORDER BY D',
        'options': { 'title': 'Population Density (people/km^2)', 'legend': 'none' }
    });

    chartEditor = new google.visualization.ChartEditor();
    google.visualization.events.addListener(chartEditor, 'ok', redrawChart);
    chartEditor.openDialog(wrapper, {});
}

// On "OK" save the chart to a <div> on the page.
function redrawChart() {
    chartEditor.getChartWrapper().draw(document.getElementById('vis_div'));
}

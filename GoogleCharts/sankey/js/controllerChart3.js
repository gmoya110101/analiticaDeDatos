/*
Título: Diagrama de Sankey de varios niveles y manejo de colores.
Objetivo: Observar el comportamiento del diagrama de Sankey con varios niveles y como luce 
            con diferentes colores.
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velazco González
*/

var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
    '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

google.charts.load("current", { packages: ["sankey"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Desde');
    data.addColumn('string', 'Hasta');
    data.addColumn('number', 'Grosor');
    data.addRows([
        ['Brazil', 'Portugal', 5],
        ['Brazil', 'France', 1],
        ['Brazil', 'Spain', 1],
        ['Brazil', 'England', 1],
        ['Canada', 'Portugal', 1],
        ['Canada', 'France', 5],
        ['Canada', 'England', 1],
        ['Mexico', 'Portugal', 1],
        ['Mexico', 'France', 1],
        ['Mexico', 'Spain', 5],
        ['Mexico', 'England', 1],
        ['USA', 'Portugal', 1],
        ['USA', 'France', 1],
        ['USA', 'Spain', 1],
        ['USA', 'England', 5],
        ['Portugal', 'Angola', 2],
        ['Portugal', 'Senegal', 1],
        ['Portugal', 'Morocco', 1],
        ['Portugal', 'South Africa', 3],
        ['France', 'Angola', 1],
        ['France', 'Senegal', 3],
        ['France', 'Mali', 3],
        ['France', 'Morocco', 3],
        ['France', 'South Africa', 1],
        ['Spain', 'Senegal', 1],
        ['Spain', 'Morocco', 3],
        ['Spain', 'South Africa', 1],
        ['England', 'Angola', 1],
        ['England', 'Senegal', 1],
        ['England', 'Morocco', 2],
        ['England', 'South Africa', 7],
        ['South Africa', 'China', 5],
        ['South Africa', 'India', 1],
        ['South Africa', 'Japan', 3],
        ['Angola', 'China', 5],
        ['Angola', 'India', 1],
        ['Angola', 'Japan', 3],
        ['Senegal', 'China', 5],
        ['Senegal', 'India', 1],
        ['Senegal', 'Japan', 3],
        ['Mali', 'China', 5],
        ['Mali', 'India', 1],
        ['Mali', 'Japan', 3],
        ['Morocco', 'China', 5],
        ['Morocco', 'India', 1],
        ['Morocco', 'Japan', 3]
    ]);

    // Opciones de configuración
    var options = {
        width: 600,
        height: 400,
        sankey: {
            //Para el inicio
            node: {
                colors: colors//Se inserta el array de colores
            },
            //Para las líneas
            link: {
                colorMode: 'gradient',//Estilo del color
                colors: colors,
                color: { stroke: 'cyan', strokeWidth: 1 }//Grosor de la línea
            }
        }
    };

    // Instancia del diagrama
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple_color'));
    chart.draw(data, options);
}
//USO DE EVENTOS PARA REEMPLAZAR GRÁFICOS

/*
Chartist tiene representaciones gráficas fijas que se eligen por su 
flexibilidad y para proporcionar un alto nivel de separación de las 
preocupaciones. Sin embargo, a veces probablemente le gustaría usar 
diferentes formas o incluso imágenes para sus gráficos. Una forma de 
lograr esto es usar los eventos de dibujo y reemplazar o agregar formas 
SVG personalizadas.
*/


var chart = new Chartist.Line('.ct-chart', {
  labels: [1, 2, 3, 4, 5],
  series: [
    [12, 9, 7, 8, 5]
  ]
});

// Escuchar los eventos de sorteo que emite el gráfico Chartist
chart.on('draw', function(data) {
// Si el evento de dibujo se activó al dibujar un punto en el gráfico de líneas
if(data.type === 'point') {
// Estamos creando un nuevo elemento SVG de ruta que dibuja un triángulo alrededor de las coordenadas del punto
var triangle = new Chartist.Svg('path', {
      d: ['M',
        data.x,
        data.y - 15,
        'L',
        data.x - 15,
        data.y + 8,
        'L',
        data.x + 15,
        data.y + 8,
        'z'].join(' '),
      style: 'fill-opacity: 1'
    }, 'ct-area');

// Con data.element obtenemos el envoltorio SVG de Chartist y podemos reemplazar el punto original dibujado por Chartist con nuestro triángulo recién creado
data.element.replace(triangle);
  }
});
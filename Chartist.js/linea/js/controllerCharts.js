var data = {
  // Una matriz de etiquetas que puede contener cualquier tipo de valores
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],

// Nuestra matriz de series que contiene objetos de series o, en este caso, matrices de datos de series  
series: [
    [5, 2, 4, 2, 0]
  ]
};

var options = {
  width: 600,
  heigth: 600
}


// Crea un nuevo objeto de gráfico de líneas donde como primer parámetro pasamos un selector
// que se está resolviendo en nuestro elemento contenedor de gráfico. El segundo parámetro
// es el objeto de datos real.
new Chartist.Line('.ct-chart', data, options);
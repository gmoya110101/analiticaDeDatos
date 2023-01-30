/*
Titulo: Grafica de linea
Objetivo: Las gráficas de línea son útiles cuando quieres mostrar los cambios en valor de una variable dada con respecto a 
          los cambios en alguna otra variable. La otra variable usualmente es el tiempo. Por ejemplo, las gráficas de línea 
          pueden ser usadas para mostrar la velocidad de un vehículo durante intervalos específicos de tiempo.

 Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/


var data = {
  
//etiquetas:'línea simple',
  // Una matriz de etiquetas que puede contener cualquier tipo de valores
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Nuestra matriz de series que contiene objetos de series o, en este caso, matrices de datos de series
  series: [
    [5, 2, 4, 2, 0]
  ]
};


// Como opciones, actualmente solo establecemos un tamaño estático de 300x200 px. También podemos omitir esto y usar contenedores de relación de aspecto.
// como viste en el ejemplo anterior
var options = {
  width: 600,
  heigth: 600
}

// Crea un nuevo objeto de gráfico de líneas donde como primer parámetro pasamos un selector
// que se está resolviendo en nuestro elemento contenedor de gráfico. El segundo parámetro
// es el objeto de datos real. Como tercer parámetro pasamos nuestras opciones personalizadas.
new Chartist.Line('.ct-chart2', data, options);
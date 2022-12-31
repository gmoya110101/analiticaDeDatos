//solo numeros enteros 
/* 
¿Estás tratando con series que contienen solo números enteros? 
¿Parece extraño que Chartist esté creando una escala que contiene 
fracciones incluso si sus datos no lo hacen? ¡No hay problema! 
¡Dígale al tipo Chartist que solo use números enteros y él hará 
los cálculos!
*/

new Chartist.Line('.ct-chart', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 2, 3, 1, -2, 0, 1, 0],
    [-2, -1, -2, -1, -3, -1, -2, -1],
    [0, 0, 0, 1, 2, 3, 2, 1],
    [3, 2, 1, 0.5, 1, 0, -1, -3]
  ]
}, {
  high: 3,
  low: -3,
  fullWidth: true,
  
// Como esto es específico del eje, debemos decirle a Chartist que use números enteros solo en el eje en cuestión
  axisY: {
    onlyInteger: true,
    offset: 20
  }
});
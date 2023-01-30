//linea simple 

/*
Un ejemplo de un gráfico de líneas simple con tres series. Puede editar este ejemplo en tiempo real.
*/


new Chartist.Line('.ct-chart4', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}, {

  width: 600,
  heigth: 600,
  fullWidth: true,//muestra la gráfica
  chartPadding: {
    right: 40
  }
});
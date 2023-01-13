//gráfico de lineas bipolares solo con area

/*
También puede dibujar solo las formas de área del gráfico de líneas. 
Las formas de área siempre se construirán alrededor de su base de área 
(que se puede configurar en las opciones), lo que también le permite 
dibujar áreas bipolares agradables.

Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/
new Chartist.Line('.ct-chart9', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 2, 3, 1, -2, 0, 1, 0],
    [-2, -1, -2, -1, -2.5, -1, -2, -1],
    [0, 0, 0, 1, 2, 2.5, 2, 1],
    [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
  ]
}, {

  width: 600,
  heigth: 600,
  high: 3,
  low: -3,
  showArea: true,
  showLine: false,
  showPoint: false,
  fullWidth: true,
  axisX: {
    showLabel: false,
    showGrid: false
  }
});
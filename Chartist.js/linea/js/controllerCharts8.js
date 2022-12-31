//gráfico de lineas con área

/*
Este gráfico usa la opción showArea para dibujar líneas, puntos pero 
también una forma de área. Utilice la opción baja para especificar 
un límite inferior fijo que hará que el área se expanda. 
También puede usar la propiedad areaBase para especificar un valor de 
datos que se usará para determinar la posición base de la forma del área 
(esto es 0 de forma predeterminada).
*/

new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [5, 9, 7, 8, 5, 3, 5, 4]
    ]
  }, {
    low: 0,
    showArea: true
  });
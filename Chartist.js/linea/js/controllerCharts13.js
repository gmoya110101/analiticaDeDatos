//INTERPOLACIÓN/SUAVIZADO DE LÍNEAS

/*
Por defecto, Chartist usa un algoritmo de spline cardinal 
para suavizar las líneas. Sin embargo, como todas las demás 
cosas en Chartist, ¡esto se puede personalizar fácilmente!
 Consulte la documentación de la API para obtener más opciones 
 de suavizado.

 Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/

var chart = new Chartist.Line('.ct-chart13', {
  labels: [1, 2, 3, 4, 5],
  series: [
    [1, 5, 10, 0, 1],
    [10, 15, 0, 1, 2]
  ]
}, {
  
  width: 600,
  heigth: 600,
  // Elimine esta configuración para ver el gráfico representado con interpolación de spline cardinal
  // A veces, en grandes saltos en los valores de los datos, es mejor usar el suavizado simple.
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 2
  }),
  fullWidth: true,
  chartPadding: {
    right: 20
  },
  low: 0
},
);
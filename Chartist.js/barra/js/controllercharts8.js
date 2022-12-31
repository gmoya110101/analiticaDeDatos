//SERIE DISTRIBUIDA

/*
A veces se desea tener gráficos de barras que muestren una 
barra por serie distribuida a lo largo del eje x. Si esta opción
 está habilitada, debe asegurarse de pasar una matriz de una sola 
 serie a Chartist que contenga los valores de la serie. En este 
 ejemplo puedes ver las ventas de camisetas de una tienda categorizadas
 por talla.
*/

new Chartist.Bar('.ct-chart', {
    labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    series: [20, 60, 120, 200, 180, 20, 10] //valores de la gráfica
  }, {
    distributeSeries: true //muestra la gráfica
    });
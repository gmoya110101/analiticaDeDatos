/*
Titulo: Grafica de linea
Objetivo: Las gráficas de línea son útiles cuando quieres mostrar los cambios en valor de una variable dada con respecto a 
          los cambios en alguna otra variable. La otra variable usualmente es el tiempo. Por ejemplo, las gráficas de línea 
          pueden ser usadas para mostrar la velocidad de un vehículo durante intervalos específicos de tiempo.

 Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/


// Inicializar un gráfico de líneas en el contenedor con el ID chart1
  new Chartist.Line('#chart1', {
    labels: [1, 2, 3, 4],
    series: [[100, 120, 180, 200]]
  },
   options = {
    width: 600, //configurar el tamaño de la gráfica
    height: 600
  },

  );

    


// Inicializar un gráfico de líneas en el contenedor con el ID chart2
  new Chartist.Bar('#chart2', {
    labels: [1, 2, 3, 4],
    series: [[5, 2, 8, 3]]
    
},
options = {    
 width: 500,       //configurar el tamaño de la gráfica
 height: 250
},
  
  );


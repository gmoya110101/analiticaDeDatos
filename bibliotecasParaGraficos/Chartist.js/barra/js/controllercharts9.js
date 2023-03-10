//COLOCACIÓN DE ETIQUETAS

/*
Puede cambiar la posición de las etiquetas en los gráficos de barras
 y líneas fácilmente usando la positionopción dentro de la configuración
  del eje.

  Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/

new Chartist.Bar('.ct-chart9', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
  }, {
    width:500,
    height:700,
    axisX: {
      // En el eje x, el inicio significa arriba y el final significa abajo
      position: 'start'
    },
    axisY: {
      // En el eje y, el inicio significa izquierda y el final significa derecha.
      position: 'end'
    }
  });
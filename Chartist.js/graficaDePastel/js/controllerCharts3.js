/*
Título: Gráfico de indicadores (Gauge) con una animación.
Objetivo: Observar el comportamiento del gráfico de indicadores con una animación.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.
Descripción: Se puede observar una animación realizada con SVG para poder
              dar el efecto de que se va cerrando el círculo.
*/

var chart = new Chartist.Pie('.ct-chart', {
  series: [10, 20, 50, 20, 5, 50, 15],
  labels: [1, 2, 3, 4, 5, 6, 7]
}, {
  donut: true,
  showLabel: false
});

chart.on('draw', function(data) {
  if(data.type === 'slice') {
    //Se obtiene la longitud de la ruta en orden para recorrer el arreglo de la animación
    var pathLength = data.element._node.getTotalLength();

    //
    // Se establece un dasharray que coincida con la longitud de la ruta como requisito previo para animar dashoffset
    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    // Crea la definición de la animación mientras se asigna un ID a la animación pafa sincronizarlo más tarde
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: 1000,
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        // Paara que no vuelva a quedarse en la inicial
        fill: 'freeze'
      }
    };

    // Si este no fue el primer segmento, debemos cronometrar la animación para que use el evento de sincronización final de la animación anterior.
    if(data.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
    }

    //Se necesita poner una valor inicial antes que inicie la animación
    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });

    // No podemos usar el modo guiado, como las animaciones no necesitan estar en la configuración manual incialmente
    // Para más información: http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
    data.element.animate(animationDefinition, false);
  }
});

//Para indicar que la animación dure 8 segundos
chart.on('created', function() {
  if(window.__anim21278907124) {
    clearTimeout(window.__anim21278907124);
    window.__anim21278907124 = null;
  }
  window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
});
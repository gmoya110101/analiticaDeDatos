//ANIMACIONES SMIL AVANZADAS

/*
Chartist proporciona una API simple para animar los elementos en 
el gráfico usando SMIL. Por lo general, puede lograr la mayoría de 
las animaciones con animaciones CSS3, pero en algunos casos le gustaría
 animar propiedades SVG que no están disponibles en CSS.

 Autor: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya
*/

var chart = new Chartist.Line('.ct-chart11', {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  series: [
    [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
    [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
    [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
    [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
  ]
}, {

  width: 600,
  heigth: 600,
  low: 0
});

// Dejemos un número de secuencia a un lado para que podamos usarlo en las devoluciones de llamadas de eventos
var seq = 0,
  delays = 80,
  durations = 500;

// Una vez que el gráfico está completamente creado, restablecemos la secuencia
chart.on('created', function () {
  seq = 0;
});

// En cada elemento dibujado por Chartist usamos la API Chartist.Svg para activar animaciones SMIL
chart.on('draw', function (data) {
  seq++;

  if (data.type === 'line') {
    // Si el elemento dibujado es una línea, hacemos un fundido de entrada de opacidad simple. Esto también se puede lograr usando animaciones CSS3.
    data.element.animate({
      opacity: {
        // El retraso cuando nos gusta iniciar la animación.
        begin: seq * delays + 1000,
        // Duración de la animación
        dur: durations,
        // El valor donde debe comenzar la animación
        from: 0,
        // El valor donde debería terminar
        to: 1
      }
    });
  } else if (data.type === 'label' && data.axis === 'x') {
    data.element.animate({
      y: {
        begin: seq * delays,
        dur: durations,
        from: data.y + 100,
        to: data.y,
        // Podemos especificar una función de aceleración desde Chartist.Svg.Easing
        easing: 'easeOutQuart'
      }
    });
  } else if (data.type === 'label' && data.axis === 'y') {
    data.element.animate({
      x: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 100,
        to: data.x,
        easing: 'easeOutQuart'
      }
    });
  } else if (data.type === 'point') {
    data.element.animate({
      x1: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart'
      },
      x2: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart'
      },
      opacity: {
        begin: seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: 'easeOutQuart'
      }
    });
  } else if (data.type === 'grid') {
    // Usando data.axis obtenemos x o y que podemos usar para construir nuestros objetos de definición de animación
    var pos1Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '1'] - 30,
      to: data[data.axis.units.pos + '1'],
      easing: 'easeOutQuart'
    };

    var pos2Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '2'] - 100,
      to: data[data.axis.units.pos + '2'],
      easing: 'easeOutQuart'
    };

    var animations = {};
    animations[data.axis.units.pos + '1'] = pos1Animation;
    animations[data.axis.units.pos + '2'] = pos2Animation;
    animations['opacity'] = {
      begin: seq * delays,
      dur: durations,
      from: 0,
      to: 1,
      easing: 'easeOutQuart'
    };

    data.element.animate(animations);
  }
});

// Por el bien del ejemplo, actualizamos el gráfico cada vez que se crea con un retraso de 10 segundos
chart.on('created', function () {
  if (window.__exampleAnimateTimeout) {
    clearTimeout(window.__exampleAnimateTimeout);
    window.__exampleAnimateTimeout = null;
  }
  window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
});
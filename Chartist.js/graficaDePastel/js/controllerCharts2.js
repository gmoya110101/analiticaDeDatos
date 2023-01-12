/*
Título: Gráfico de indicadores (Gauge).
Objetivo: Observar el comportamiento del gráfico de indicadores.
Autor: Gerardo Iturribarria Moya  y Alan Mitchell Velasco González.
Descripción: Se puede observar como apartir del gráfico de anillo o dona
              se puede crear el de indicadores
*/

new Chartist.Pie('.ct-chart2',{
  series: [20, 10, 30, 40]
},
{
  width:500,
  height:700,
  donut: true,//Se activa la opción de ponerlo como si fuera un anillo
  donutWidth: 100,//Nodifica el grosor del anillo
  startAngle: 270,//Posiciona la gráfica en el ángulo que se indique (Así es para ponerla en horizontal)
  total: 200,/*Para extender cada fracción de la gráfica, mientras más
               pequeño sea el valor, más grande la gráfica*/
  showLabel: true
},

);
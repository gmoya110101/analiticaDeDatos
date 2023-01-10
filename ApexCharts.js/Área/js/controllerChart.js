/* 
Titulo:Gráfica de Area

Objetivo: Los gráficos de áreas permiten identificar tendencias en los datos en el transcurso del tiempo. Son parecidos a 
          los gráficos de líneas, pero se diferencian en que el espacio situado debajo de las líneas está sombreado para que se aprecie 
          mejor la magnitud de las tendencias.

Autores: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya 

*/



var options = {
  chart: {
    height: 280,
    type: "area",
    width:'75%', //tamaño de la gráfica
    stacked: true //Los gráficos de áreas apiladas funcionan de la misma manera que los gráficos de áreas simples, excepto que el inicio de cada punto de datos continúa desde el punto dejado por la serie de datos anterior.
  },
  dataLabels: {
    enabled: false //etiquetas de datos, si esta en false no se visualizan
  },
  //colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'], //Para cambiar el color del área
  stroke: {
    //curve: 'smooth', //Para dibujar una curva tan suave
    //curve: 'straight', //Conecte los puntos de datos en línea recta y no aplique ninguna curva a la línea.
    //curve: 'stepline',  //En un gráfico de áreas de líneas escalonadas, los puntos están conectados por segmentos de líneas horizontales y verticales, que parecen escalones de una escalera y el área se llena de color.
    //width: 2 //Cambiar el ancho de la línea
},
/* 
series: [{
    type: 'area',
    data: [...]             // por si se quiere agrera 2 tipos de gráficas en una
  }, {
    type: 'column',
    data: [...]
  }]

*/

/* 
series: [{
    data: [{
      x: new Date('2018-02-12').getTime(),
      y: 76
    }, {
      x: new Date('2018-02-12').getTime(),
      y: 76
    }]
  }], 
  xaxis: {
    type: 'datetime'
  },  
*/
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2],

      
    },{
        name: "Series 2",
      data: [50, 60, 70, 80, 90, 100, 110]
    }
  ],
  fill: {
    type: "pattern", //type: 'gradient' / 'solid' / 'pattern' / 'image'
    //se puden modificar el tipo
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan"
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
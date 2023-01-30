/* 
Titulo:Gráfica de Lineas

Objetivo: Los gráficos de líneas permiten visualizar los cambios a lo largo de un rango continuo, como el tiempo o 
          la distancia. La visualización del cambio con un gráfico de líneas permite ver de una sola vez la tendencia general 
          y comparar simultáneamente varias tendencias.

Autores: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya 

*/

var options = {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  markers: { //funcion para agregar marcadores
    size: 0, //Los marcadores se utilizan para representar un punto de datos particular en el gráfico. Cualquier tamaño mayor que 0 habilitará los marcadores.
    //Para ocultar los marcadores, puede establecer el tamaño en 0
},

  dataLabels: {
    enabled: false
  },

  /*
series: [{
    type: 'line',
    data: [...]            //si se quiere combinar gráficas lineales con barras solo se modifica en el type
  }, {
    type: 'column',
    data: [...]
  }]

  */
  fill: { //fucion para modificar las lineas
    //type: 'gradient', // linea con degradado
    //type: 'solid', //linea normal
    //type: 'pattern', //linea con efecto de cadena
    //type: 'image' desconozco
    //type: ['pattern', 'gradient'] //se pueden combinar dependiendo el tipo de lineas que haya
  },
  //colors: ["#FF1654", "#247BA0"],//cololores de las líneas 
  series: [
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }
  ],
  stroke: { //funcion para seleccionar tipo de gráfica
    width: [4, 4],
    //curve:'smooth', //En un gráfico Spline, los puntos de datos se conectan mediante curvas suaves. Para dibujar una curva tan suave
    //curve:'straight',//Conecte los puntos de datos en línea recta y no aplique ninguna curva a la línea
    //curve:'stepline',//En un gráfico de líneas escalonadas, los puntos están conectados por segmentos de líneas horizontales y verticales, que parecen escalones de una escalera.
    //dashArray: 2, //Las líneas discontinuas son útiles para mostrar cierto tipo de datos. Por ejemplo, cuando hay datos incompletos disponibles o cuando desea comparar con datos anteriores en un gráfico de líneas de series múltiples, una línea discontinua es útil en tales casos.
    //width: 5, //tamaño de las lineas
},


  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#FF1654"
      },
      labels: {
        style: {
          colors: "#FF1654"
        }
      },
      title: {
        text: "Series A",
        style: {
          color: "#FF1654"
        }
      }
    },
    {
      opposite: true,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#247BA0"
      },
      labels: {
        style: {
          colors: "#247BA0"
        }
      },
      title: {
        text: "Series B",
        style: {
          color: "#247BA0"
        }
      }
    }
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
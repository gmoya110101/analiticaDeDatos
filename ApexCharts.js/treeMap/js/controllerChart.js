/* var options = {
   series: [{
   name: 'Metric1',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric2',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric3',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric4',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric5',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric6',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric7',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric8',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 },
 {
   name: 'Metric9',
   data: generateData(18, {
     min: 0,
     max: 90
   })
 }
 ],
   chart: {
   height: 350,
   type: 'heatmap',
 },
 dataLabels: {
   enabled: false
 },
 colors: ["#008FFB"],
 title: {
   text: 'HeatMap Chart (Single color)'
 },
 };

 var chart = new ApexCharts(document.querySelector("#chart"), options);
 chart.render();
*///Este bloque de código es para crear una gráfica pero de un solo color      


/*
*************************************************************************************************
 Bloque de código para crear un heatmap con múltiples colores
*************************************************************************************************
*/
var options = {
  //Se agregan los datos estáticos
  series: [{
    name: 'Jan',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Feb',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Mar',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Apr',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'May',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Jun',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Jul',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Aug',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Sep',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  }
  ],
  chart: {//Inicializa el gráfico
    height: 350,
    type: 'heatmap',//Para cambiar el tipo de gráfico
  },
  plotOptions: {
    heatmap: {
      reverseNegativeShade: true,//Pone los datos negativos de un color más oscuro
      shadeIntensity: 0.4,//Intensidad del color de los cuadros
      radius: 0,
      useFillColorAsStroke: true,//Deja una especie de margen si se pone false
      colorScale: {
        ranges: [{
          from: -30,//Cambia paleta de colores si se pone en positivo se pone de colores pastel
          to: 5,
          name: 'Bajo',//nombre de la etiqueta de identificación
          color: '#00A100'
        },
        {
          from: 6,
          to: 20,
          name: 'Medio',
          color: '#128FD9'
        },
        {
          from: 21,
          to: 45,
          name: 'Alto',
          color: '#FFB200'
        },
        {
          from: 46,
          to: 55,
          name: 'Extremo',
          color: '#FF0000'
        }
        ]
      }
    }
  },
  dataLabels: {
    enabled: true//Pone las etiquetas de los datos en cada rectángulo
  },
  stroke: {
    width: 1//Posición del marco en eje X
  },
  title: {
    text: 'Heatmap con varios colores'
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

function generateData(count, yrange) {//Función necesaria para los datos
  var i = 0;
  var series = [];

  while (i < count) {
    var x = 'w' + (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}




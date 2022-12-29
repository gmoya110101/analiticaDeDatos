var options = {
    chart: { //inica el gráfico 
      type: 'bar', //se ingresa el tipo de gráfica 
      width:'75%' //se ingresa el tamaño que tendrá la gráfica 
    },
    series: [{
      name: 'Ventas', //se ingresa el nombre según el de lo que trate la gráfica 
      data: [30,40,35,50,49,60,70,91,125] //datos que contendra la gráfica
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999] //eje horizontal que se extiende en la parte inferior de la gráfica
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
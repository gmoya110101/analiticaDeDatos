var options = {
    chart: {
      type: 'donut',//tipo de gráfica
      width:'75%'//tamaño de la gráfica 

    },
   /* plotOptions: { // funcion para cambiar el tamaño del centro
      pie: {
        donut: {
          size: '70%'//el porcentaje va aumentando o disminuyendo, segun el gusto
        }
      }
    },*/

    plotOptions: {// funcion para cambiar el tamaño del centro y mostrar valores
      pie: {
        customScale: 0.8,//se puede cambiar el tamaño de la gráfica al proporcionar un valor numérico y aumenta o disminuye el tamaño según el valor que proporcione.
        donut: {
          size: '50%',//el ancho  va aumentando o disminuyendo, segun el gusto
          labels: {
            show: true,//quita info de la gráfica
            name: {
              labels:'alan'
            },
            value: {
              labels:'velascou'
            }
          }
        }
      }
    },
    
    series: [44, 55, 41, 17, 35], //valores de la gráfica 
   //chartOptions: {La sintaxis anterior es para la apexchartsbiblioteca central. Si está utilizando Vue/React, debe pasar etiquetas en chartOptions
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon','limon'], //etiquetas de la gráfica
   // }

   
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
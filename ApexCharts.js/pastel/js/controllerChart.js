/* 
Titulo:Gráfica de Pastel

Objetivo: Un gráfico circular es un gráfico estadístico circular, que se divide en porciones para ilustrar la proporción numérica.
          En un gráfico circular, la longitud del arco de cada sector es proporcional a la cantidad que representa.

Autores: Alan Mitchell Velasco Gonzalez y Gerardo Iturribarria Moya 

*/

var options = {
    chart: {
      type: 'pie',//tipo de gráfica
      width:'75%'//tamaño de la gráfica 

    },


    plotOptions: {// funcion para cambiar el tamaño del centro y mostrar valores
      pie: {
        customScale: 0.8,//se puede cambiar el tamaño de la gráfica al proporcionar un valor numérico y aumenta o disminuye el tamaño según el valor que proporcione.
        donut: {
          size: '50%',//el porcentaje va aumentando o disminuyendo, segun el gusto
          labels: {
            show: false, //si es falso no muestra los valores en medio
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
/*
    dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%"              //funcion que pone los porcentajes en decimal
        },
        dropShadow: {
          labels:'alan'
        }
      },*/
    
    series: [44, 55, 41, 17, 35], //valores de la gráfica 
   //chartOptions: {La sintaxis anterior es para la apexchartsbiblioteca central. Si está utilizando Vue/React, debe pasar etiquetas en chartOptions
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon','limon'], //etiquetas de la gráfica
   // }

   
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
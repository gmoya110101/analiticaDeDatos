//https://parzibyte.me/blog/2021/01/03/chart-js-tutorial-ejemplos-graficas-web/
var ctx = document.getElementById('myChart').getContext('2d');

 var myBarChart = new Chart(ctx, {
    type: 'bar',
    width:'900',
    height:'200',
    data: {
      labels: ['Alan','Gerardo','Giner'],//etiqueta
      datasets:[{
        labels:'Estudiantes sobresalientes',
        data:[95,85,75],
        backgorundColor:['#000fff56','#ae678956','#3456ff56'],//colores a las barras
        borderColor:['#000fff','#ae6789','#3456ff'],//borde
        borderWidth: 2 //dar grozor al borde 
      }]
        },
    options: {
      scales: {
        yAxes: {
          ticks:{
            beginAtZero:true
          } 
        }
      }
    }
  });
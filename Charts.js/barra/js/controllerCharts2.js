var ctx = document.getElementById('myChart').getContext('2d');
var cfg = new Chart(ctx,{
  type: 'bar',
  data: {
    datasets: [{
      data: [20, 10],
      backgorundColor:['#000fff56','#3456ff56'],
      borderColor:['#000fff56','#3456ff56'],//borde
      borderWidth: 2
    }],
    labels: ['a', 'b'],
  }
});
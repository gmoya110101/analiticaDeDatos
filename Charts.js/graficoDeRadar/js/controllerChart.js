//Bloque donde se montan los datos
const data = {
    labels: [
      'Comer',
      'Pistear',
      'Dormir',
      'Decir mamadas',
      'Hacerse pendejo',
      'Cagarla',
      'Correr'
    ],
    datasets: [{
      label: 'Gerardo',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Alan',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'green',//Color del punto
      pointBorderColor: '#fff',//Borde del punto
      pointHoverBackgroundColor: 'black',//Cambia de color el punto cada que le paso el mouse
      pointHoverBorderColor: 'rgb(54, 162, 235)',//Cambia de color el borde del punto cada que le paso el mouse
      pointRadius: 5,//Tamaño del punto
      pointStyle: 'triangle',//Forma del punto
      borderDash: [10],//Linea punteada
      spanGaps: true
      
    }]
  };
const options = {
    plugins: {
        legend: { position: 'right' }//Para poner la leyenda de los datos en la posición que se deseé
    },
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 50,
            suggestedMax: 100
        }
    }
}

//Bloque de configuración
const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

//Bloque de renderizado


const myChart = new Chart(document.getElementById('myChart').getContext('2d'),
    config);




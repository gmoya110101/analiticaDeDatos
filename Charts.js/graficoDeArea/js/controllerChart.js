//Bloque donde se montan los datos
const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(251,129,129,0.5)',//Fondo
        tension: 0.1,//para que tenga líneas rectas
        pointBackgroundColor: 'green',//Color del punto
        pointBorderColor: '#fff',//Borde del punto
        pointHoverBackgroundColor: 'black',//Cambia de color el punto cada que le paso el mouse
        pointHoverBorderColor: 'rgb(54, 162, 235)',//Cambia de color el borde del punto cada que le paso el mouse
        pointRadius: 5,//Tamaño del punto
        pointStyle: 'triangle',//Forma del punto
    }]
};

const options = {
    plugins: {
        legend: { position: 'right' }//Para poner la leyenda de los datos en la posición que se deseé
    }
}

//Bloque de configuración
const config = {
    type: 'line',
    data,
    options
};


//Bloque de renderizado


const myChart = new Chart(document.getElementById('myChart').getContext('2d'),
    config);




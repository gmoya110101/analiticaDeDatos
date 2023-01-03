//Bloque donde se montan los datos
const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [{
        label: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        data: [65, 59, 80, 81, 56, 55, 50],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1,

        borderJoinStyle:'miter'
    }]

};

const options = {
    plugins: {
        legend: { position: 'right' }//Para poner la leyenda de los datos en la posición que se deseé
    }
}

//Bloque de configuración
const config = {
    type: 'doughnut',
    data,
    options
};


//Bloque de renderizado


const myChart = new Chart(document.getElementById('myChart').getContext('2d'),
    config);




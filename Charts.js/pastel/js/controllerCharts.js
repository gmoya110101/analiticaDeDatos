///var ctx = document.getElementById('myChart').getContext('2d');

/*
 var myBarChart = new Chart(ctx, {
    type: 'pie',
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

  });

  */

  // Obtener una referencia al elemento canvas del DOM
const $grafica = document.getElementById("myChart");
// Las etiquetas son las porciones de la gráfica
const etiquetas = ["Ventas", "Donaciones", "Trabajos", "Publicidad"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [1500, 400, 2000, 7000], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(163,221,203,0.2)',
        'rgba(232,233,161,0.2)',
        'rgba(230,181,102,0.2)',
        'rgba(229,112,126,0.2)',
    ],// Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});
  // Initialize a Line chart in the container with the ID chart1
  new Chartist.Line('#chart1', {
    labels: [1, 2, 3, 4],
    series: [[100, 120, 180, 200]]
  },
   options = {
    width: 300, //configurar el tamaño de la gráfica
    height: 200
  },

  );

    


  // Initialize a Line chart in the container with the ID chart2
  new Chartist.Bar('#chart2', {
    labels: [1, 2, 3, 4],
    series: [[5, 2, 8, 3]]
    
},
options = {    
 width: 500,       //configurar el tamaño de la gráfica
 height: 250
},
  
  );

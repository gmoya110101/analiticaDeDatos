options = {
  series: [
    {
      data: [
        {
          x: "New Delhi",
          y: 218,
        },
        {
          x: "Kolkata",
          y: 149,
        },
        {
          x: "Mumbai",
          y: 184,
        },
        {
          x: "Ahmedabad",
          y: 55,
        },
        {
          x: "Bangaluru",
          y: 84,
        },
        {
          x: "Pune",
          y: 31,
        },
        {
          x: "Chennai",
          y: 70,
        }
      ],
    },
  ],
  chart: {
    height: 350,
    type: "treemap",
  },
  plotOptions: {
    treemap: {
      enableShades: true,//Cambia la intensidad del color dependiendo si el valor está cerca o lejos del rango que se asignó
      shadeIntensity: 0.5,
      reverseNegativeShade: true,
      distributed: false,
      useFillColorAsStroke: false,//Pone un margen entre cada rectángulo
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 50,
            color: '#06FEA0'
          },
          {
            from: 51,
            to: 100,
            color: '#2BFE48'
          },
          {
            from: 101,
            to: 150,
            color: '#FEFB38'
          },
          {
            from: 151,
            to: 200,
            color: '#EEBB3E'
          },
          {
            from: 201,
            to: 250,
            color: '#EE493E'
          },
          {
            from: 251,
            to: 300,
            color: '#EE3EB3'
          }

        ]
      },
    }
  }

}

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
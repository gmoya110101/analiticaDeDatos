g4 = new Dygraph(
    document.getElementById("graphdiv4"),
    "../csv/twonormals.csv",
    {
      rollPeriod: 7,
      showRoller: true,
      errorBars: true,
      valueRange: [50,125]
    }
  );
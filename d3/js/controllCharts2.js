/*
var dataset = [ 5, 10, 15, 20, 25 ];

d3.select("body").selectAll("div")
.data(dataset)
.enter()
.append("div")
.attr("class", "bar")

*/

/*
.style("height", function(d) { //En el diagrama de barras, la altura de cada barra debe generarse de acuerdo con el dato correspondiente, entonces si se añade el siguiente código:
    return d + "px";
      }); 
      */
/*
      .style("height", function(d) {
        var barHeight = d * 5;  //Incrementar la escala 5 veces.
        return barHeight + "px";
        });
        */

        var dataset = [ 5, 10, 15, 20, 25 ];
			
			d3.select("body").selectAll("div")
				.data(dataset)
				.enter()
				.append("div")
				.attr("class", "bar")
				.style("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "px";
				});
//d3.select("body").append("p").text("New paragraph!");

var dataset=[5,10,15,20,25];
d3.select("body").selectAll("p") 
//d3.select("body") encuentra la etiqueta -body- en el DOM y pasa la referencia al siguiente paso en la cadena.

//.selectAll("p") - Selecciona todos los párrafos del DOM. Como aún no existen, devuelve una selección vacía. Esto se debe entender como la representación de los párrafos que existirán próximamente.
	
    .data(dataset)// Cuenta y desagrega los valores. Existen cinco valores en la muestra, por consiguiente de aquí en adelante todo se ejecutará cinco veces, una vez por cada valor.
	.enter()//Para crear nuevos elementos que estén asociados a datos, es necesario utilizar enter(). Este método revisa el DOM y luego revisa los datos que le serán entregados. Si existen más datos que elementos del DOM, enter() crea un elemento temporal con el cual se puede hacer la magia. Luego enter() entrega la referencia al elemento temporal al siguiente paso en la cadena.
	.append("p")//Utiliza la selección temporal creada previamente por el método enter() e inserta el elemento p en el DOM. Qué bien! Ahora lo pasa como referencia al elemento que acaba de crear al siguiente paso en la cadena.
	//.text("New paragraph!");//Toma la referencia al recién creado p e inserta el valor del texto.
    .text(function(d) { return d; })
    //.style("color", "red"); //pone color a los parrafos
    
    /*
    .style("color", function(d) {
        if (d > 15) {   //Umbral - 15
            return "red";
        } else {
    	return "black";
        }
    }); //solo pinta de rojo los ultimos 2 datos

    */
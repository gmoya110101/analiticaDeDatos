/*
Título: showController
Objetivo: Administrar la proyeción de los gráficos mediante un select
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velazco Gonzalez
*/

const collection = document.getElementsByClassName("contenedor");

function ocultar() {
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "none";
    }
}

function muestraEjemplo() {

    if (document.getElementById("cmbEjemplos").value == "1") {
        ocultar();
        document.getElementById("barChart_1").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "2") {
        ocultar();
        document.getElementById("barChart_2").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "3") {
        ocultar();
        document.getElementById("dataOrder").style.display = 'block';

    } 
}




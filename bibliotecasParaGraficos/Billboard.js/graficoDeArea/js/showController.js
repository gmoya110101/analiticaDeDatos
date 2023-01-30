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
        document.getElementById("areaChart").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "2") {
        ocultar();
        document.getElementById("above").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "3") {
        ocultar();
        document.getElementById("below_1").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "4") {
        ocultar();
        document.getElementById("below_2").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "5") {
        ocultar();
        document.getElementById("linearGradient_1").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "6") {
        ocultar();
        document.getElementById("linearGradient_2").style.display = 'block';

    } 
}




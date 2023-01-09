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
        document.getElementById("piechart").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "2") {
        ocultar();
        document.getElementById("piechart2").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "3") {
        ocultar();
        document.getElementById("donut_single").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "4") {
        ocultar();
        document.getElementById("donutchart").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "5") {
        ocultar();
        document.getElementById("piechart_3d").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "6") {
        ocultar();
        document.getElementById("piechart3").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "7") {
        ocultar();
        document.getElementById("pacman").style.display = 'block';
    }
}




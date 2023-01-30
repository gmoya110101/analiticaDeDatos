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
        document.getElementById("bar1").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "2") {
        ocultar();
        document.getElementById("bar2").style.display = 'block';

    }else if (document.getElementById("cmbEjemplos").value == "3") {
        ocultar();
        document.getElementById("bar3").style.display = 'block';

    }else if (document.getElementById("cmbEjemplos").value == "4") {
        ocultar();
        document.getElementById("bar4").style.display = 'block';

    }else if (document.getElementById("cmbEjemplos").value == "5") {
        ocultar();
        document.getElementById("bar5").style.display = 'block';

    }else if (document.getElementById("cmbEjemplos").value == "6") {
        ocultar();
        document.getElementById("bar6").style.display = 'block';

    }else if (document.getElementById("cmbEjemplos").value == "7") {
        ocultar();
        document.getElementById("bar7").style.display = 'block';

    }else if (document.getElementById("cmbEjemplos").value == "8") {
        ocultar();
        document.getElementById("bar8").style.display = 'block';

    }else if (document.getElementById("cmbEjemplos").value == "9") {
        ocultar();
        document.getElementById("bar9").style.display = 'block';

    }
    
}
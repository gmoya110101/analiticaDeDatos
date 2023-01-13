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
        document.getElementById("ct-chart").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "2") {
        ocultar();
        document.getElementById("ct-chart2").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "3") {
        ocultar();
        document.getElementById("ct-chart3").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "4") {
        ocultar();
        document.getElementById("ct-chart4").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "5") {
        ocultar();
        document.getElementById("ct-chart5").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "6") {
        ocultar();
        document.getElementById("ct-chart6").style.display = 'block';

    } else if (document.getElementById("cmbEjemplos").value == "7") {
        ocultar();
        document.getElementById("ct-chart7").style.display = 'block';
    
    } else if (document.getElementById("cmbEjemplos").value == "8") {
        ocultar();
        document.getElementById("ct-chart8").style.display = 'block';
    
    } else if (document.getElementById("cmbEjemplos").value == "9") {
        ocultar();
        document.getElementById("ct-chart9").style.display = 'block';
    
    } else if (document.getElementById("cmbEjemplos").value == "10") {
        ocultar();
        document.getElementById("ct-chart10").style.display = 'block';
    
    } else if (document.getElementById("cmbEjemplos").value == "11") {
        ocultar();
        document.getElementById("ct-chart11").style.display = 'block';
    
    } else if (document.getElementById("cmbEjemplos").value == "12") {
        ocultar();
        document.getElementById("ct-chart12").style.display = 'block';
    
    } else if (document.getElementById("cmbEjemplos").value == "13") {
        ocultar();
        document.getElementById("ct-chart13").style.display = 'block';
    
    } else if (document.getElementById("cmbEjemplos").value == "14") {
        ocultar();
        document.getElementById("ct-chart14").style.display = 'block';
    
    } else if (document.getElementById("cmbEjemplos").value == "15") {
        ocultar();
        document.getElementById("ct-chart15").style.display = 'block';
    
    }
}




/*
Título: showController
Objetivo: Administrar la proyyeción de los gráficos mediante un select
Autores: Gerardo Iturribarria Moya y Alan Mitchell Velazco Gonzalez
*/

function muestraEjemplo() {
    if (document.getElementById("cmbEjemplos").value == "1") {
        console.log(document.getElementById("cmbEjemplos").value);
        document.getElementById("encapsula").style.display = 'none';
        document.getElementById("chart_div").style.display = 'block';
       


    } else if (document.getElementById("cmbEjemplos").value == "2") {
        console.log(document.getElementById("cmbEjemplos").value);
        document.getElementById("chart_div").style.display = 'none';
        document.getElementById("encapsula").style.display = 'block';
        
        
    }
}




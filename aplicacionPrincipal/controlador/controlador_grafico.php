<?php
require 'modelo_grafico.php';
$MG = new modelo_Grafico();
$consulta = $MG -> TraerDatosGraficosBar();
echo json_encode($consulta);
?>
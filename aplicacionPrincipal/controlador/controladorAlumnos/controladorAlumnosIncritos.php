<?php
require '../../modelo/Alumno.php';
$MG = new Alumno();
$consulta = $MG -> obtenerAlumnosPorCarrera();
echo json_encode($consulta);
?>
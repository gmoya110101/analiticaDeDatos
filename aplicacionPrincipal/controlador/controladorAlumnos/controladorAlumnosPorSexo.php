<?php
require '../../modelo/Alumno.php';
$MG = new Alumno();
$consulta = $MG -> obtenerAlumnosPorSexo();
echo json_encode($consulta);
?>
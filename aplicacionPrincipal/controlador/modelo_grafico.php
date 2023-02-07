<?php
	class modelo_Grafico{
		private $conexion;
		function __construct()
		{
			require_once('../modelo/conexion.php');
			$this->conexion = new conexion();
			$this->conexion->conectar();
        }


		function TraerDatosGraficosBar(){
			$sql = "CALL obtenerAlumnosPorCarrera";	
			$arreglo = array();
			if ($consulta = $this->conexion->conexion->query($sql)) {

				while ($consulta_VU = mysqli_fetch_array($consulta)) {
					$arreglo[] = $consulta_VU;
				}
				return $arreglo;
				$this->conexion->cerrar();	
			}
		}
	}
?>
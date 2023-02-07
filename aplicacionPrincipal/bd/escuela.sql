-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-02-2023 a las 05:51:24
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escuela`
--
CREATE DATABASE IF NOT EXISTS `escuela` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `escuela`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `idalumnos` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `numeroControl` int(11) NOT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `carrera` varchar(45) NOT NULL,
  `semestre` varchar(45) NOT NULL,
  `nombreEscuela` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`idalumnos`, `nombre`, `numeroControl`, `edad`, `sexo`, `carrera`, `semestre`, `nombreEscuela`) VALUES
(1, 'Alan', 19011467, 21, 'H', 'Sistemas', 'Octavo ', 'ITO'),
(2, 'Sahady', 19011468, 21, 'M', 'Gestion', 'Septimo ', 'ITO'),
(3, 'Elizabeth', 19011469, 25, 'M', 'Quimica', 'Octavo ', 'ITO'),
(4, 'Alfredo', 19011470, 18, 'H', 'Mecanica', 'Sexto ', 'ITO'),
(5, 'Miguel', 19011471, 20, 'H', 'Industrial', 'Octavo ', 'ITO'),
(6, 'Gerardo', 19011472, 20, 'H', 'Sistemas', 'Octavo ', 'ITO'),
(7, 'Giner', 19011473, 20, 'H', 'Sistemas', 'Octavo ', 'ITO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `idcalificaciones` int(11) NOT NULL,
  `promedio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `calificaciones`
--

INSERT INTO `calificaciones` (`idcalificaciones`, `promedio`) VALUES
(1, 100),
(2, 95),
(3, 90),
(4, 100),
(5, 85),
(6, 70),
(7, 84);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `idcursos` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `inscritos` varchar(45) NOT NULL,
  `horario` varchar(45) NOT NULL,
  `areaCarrera` varchar(45) NOT NULL,
  `clave` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`idcursos`, `nombre`, `inscritos`, `horario`, `areaCarrera`, `clave`) VALUES
(1, 'Orientada a objetos', '20', '12:00 a 1:00', 'Sistemas', 'S1'),
(2, 'Fundamentos de quimica', '15', '10:00 a 11:00', 'Quimica', 'Q1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `idmaterias` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `areaCarrera` varchar(45) NOT NULL,
  `clave` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`idmaterias`, `nombre`, `areaCarrera`, `clave`) VALUES
(1, 'Programacion', 'Sistemas', 'S1'),
(2, 'Quimica', 'Quimica', 'Q1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `idprofesores` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `numeroControl` int(11) NOT NULL,
  `edad` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `carrera` varchar(45) NOT NULL,
  `nombreEscuela` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`idprofesores`, `nombre`, `numeroControl`, `edad`, `sexo`, `carrera`, `nombreEscuela`) VALUES
(1, 'Concepcion', 1, '45', 'M', 'Sistemas', 'ITO'),
(2, 'Patricia', 2, '46', 'M', 'Sistemas', 'ITO'),
(3, 'Danya', 3, '25', 'M', 'Quimica', 'ITO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recursos`
--

CREATE TABLE `recursos` (
  `idrecursos` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `inscritos` varchar(45) NOT NULL,
  `horario` varchar(45) NOT NULL,
  `areaCarrera` varchar(45) NOT NULL,
  `clave` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`idalumnos`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`idcalificaciones`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`idcursos`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`idmaterias`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`idprofesores`);

--
-- Indices de la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD PRIMARY KEY (`idrecursos`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/**
 * Título: Gráfico de barras con ReCharts.
 * Objetivo: Analizar el comportamiento del gráfico de barras creado con react.
 * Autores: Gerardo Iturribarria Moya y Alan Mitchell Velasco González.
 */

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';//Elementos necesarios

const data = [//Array con los datos
  {
    name: 'Página A',
    aceptacion: 4000,
    negativa: 2400,
    amt: 2400,
  },
  {
    name: 'Página B',
    aceptacion: 3000,
    negativa: 1398,
    amt: 2210,
  },
  {
    name: 'Página C',
    aceptacion: 2000,
    negativa: 9800,
    amt: 2290,
  },
  {
    name: 'Página D',
    aceptacion: 2780,
    negativa: 3908,
    amt: 2000,
  },
  {
    name: 'Página E',
    aceptacion: 1890,
    negativa: 4800,
    amt: 2181,
  },
  {
    name: 'Página F',
    aceptacion: 2390,
    negativa: 3800,
    amt: 2500,
  },
  {
    name: 'Página G',
    aceptacion: 3490,
    negativa: 4300,
    amt: 2100,
  },
];

export default function App() {//Función principal

    return (
      //aspect sirve para dimensionar la altura, en este caso está a un tercio del ancho
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
        //Configuración inicial del gráfico
          width={500}
          height={500}
          data={data}
          margin={{//Margenes del gráfico
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="10 10" /> {/**Pone el ancho de la cuadrícula */}
          <XAxis dataKey="name" /> {/** Nombre para las etiquetas del eje X*/}
          <YAxis />
          <Tooltip />
          <Legend />
          {/**Colores de las barras */}
          <Bar dataKey="negativa" fill="#8884d8" />
          <Bar dataKey="aceptacion" fill="#82ca9d" />
        </BarChart>
        {/**Para hacerlo responsivo */}
      </ResponsiveContainer>
    );
  }


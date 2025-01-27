'use client'
import React from 'react';
import { Grid, Typography, Paper, Card, CardContent } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const dataRecepciones = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [
    {
      label: 'Recepciones por Liquidar',
      data: [120, 150, 180, 220, 130, 200, 250, 210, 230, 180, 170, 140],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
    {
      label: 'Total de Recepciones',
      data: [90, 110, 140, 170, 160, 180, 200, 210, 220, 240, 250, 260],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true,
    }
  ]
};

const dataArroz = {
  labels: ['Arroz Tipo A', 'Arroz Tipo B', 'Arroz Tipo C'],
  datasets: [
    {
      label: 'Monto en USD',
      data: [3000, 4000, 2500],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
    }
  ]
};

export default function Page() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard de Recepciones y Montos
      </Typography>

      <Grid container spacing={3}>
        {/* Total Kg Recepcionados */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="h6">Total Kg Recepcionados</Typography>
            <Typography variant="h4" color="primary">
              10,500 kg
            </Typography>
          </Paper>
        </Grid>

        {/* Total de Recepciones por Liquidar */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="h6">Total Recepciones por Liquidar</Typography>
            <Typography variant="h4" color="secondary">
              1,350
            </Typography>
          </Paper>
        </Grid>

        {/* Total Adelantos */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: '16px', textAlign: 'center'}}>
            <Typography variant="h6">Total Adelantos</Typography>
            <Typography variant="h4" color="textSecondary">
              $5,500 USD
            </Typography>
          </Paper>
        </Grid>

        {/* Montos por Tipos de Arroz */}
     
        {/* Gráfico de Recepciones por Liquidar y Total de Recepciones */}
   
      </Grid>
    </div>
  );
}

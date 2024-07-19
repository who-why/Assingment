import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../Home/Home.css';

const BarChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Current Revenue',
        data: [8000, 10000, 9000, 12000],
        backgroundColor: '#b0c4de',
      },
      {
        label: 'Previous Revenue',
        data: [1000, 2000, 3000, 5000],
        backgroundColor: '#66cdaa',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: 'white', 
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', 
        },
      },
    },
  };

  return (
    <div className='barchart'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

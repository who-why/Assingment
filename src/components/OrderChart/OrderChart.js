// src/components/OrderMetrics.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './OrderChart.css';
import Peakhours from '../Peakhour/Peakhour';

const OrderChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Total Orders',
        data: [120, 100, 90, 125],
        backgroundColor: ['#dda0dd', '#add8e6', '#e6e6fa', '#dda0dd'],
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="order-metrics-container">
        <div className="order-metrics-header">
            <h2>Order Metrics</h2>
        </div>

      <div className="order-metrics-chart">
        <Doughnut data={data} options={options} />
        <div className="order-metrics-total">
          <p>Total Orders</p>
          <h3>567</h3>
          <p>in last 4 weeks</p>
        </div>
      </div>
      <div className="order-metrics-weeks">
        <div className="order-week">
          <p>Week 1</p>
          <h3>120</h3>
        </div>
        <div className="order-week">
          <p>Week 2</p>
          <h3>100</h3>
        </div>
        <div className="order-week">
          <p>Week 3</p>
          <h3>90</h3>
        </div>
        <div className="order-week">
          <p>Week 4</p>
          <h3>125</h3>
        </div>
      </div>
      <Peakhours/>
    </div>
  );
};

export default OrderChart;

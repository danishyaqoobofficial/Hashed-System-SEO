// src/components/CrawledPagesChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const CrawledPagesChart = () => {
  const data = {
    labels: ['Health', 'Broken', 'Have issues', 'Redirects', 'Blocked'],
    datasets: [
      {
        label: 'Pages',
        data: [, , , , ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',  // Health
          'rgba(255, 99, 132, 0.2)',  // Broken
          'rgba(255, 206, 86, 0.2)',  // Have issues
          'rgba(75, 192, 192, 0.2)',  // Redirects
          'rgba(153, 102, 255, 0.2)', // Blocked
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // To display the chart horizontally
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default CrawledPagesChart;

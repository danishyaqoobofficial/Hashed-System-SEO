import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 1,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Chart() {

  

  return (
    <>
    <div className="w-full h-full">
         <Doughnut data={data} />
    </div>
    </>
  )
}

export default Chart 
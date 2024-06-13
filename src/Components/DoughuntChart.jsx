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
        '#0D99FF',
        '#E9ECF0',
      ],
      borderColor: [
        '#0D99FF',
        '#E9ECF0',
      ],
      borderWidth: 1,
    },
  ],
};

function DoughuntChart() {

  

  return (
    <>
    <div className="w-full h-full">
         <Doughnut data={data} />
    </div>
    </>
  )
}

export default DoughuntChart 
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

export const options = {
  responsive: true,
  plugins: {
    legend: false,
  },
};


export const data = {
  labels:['' , '' , '' , ''],
  datasets: [
    {
      fill: true,
      data: [100 , 30 , 100 , 100],
      borderColor: 1 ? '#FF4954' : '#F27A23',
      backgroundColor: 2 ? '#FFEEEE'  : "#FFEEEE" ,
    },
  ],
};


function Chart() {

  

    return (
      <>
      <div className="w-full h-full">
           <Line options={options} data={data} />
      </div>
      </>
    )
  }
  
  export default Chart 
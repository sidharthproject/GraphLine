import React ,{useState}from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
  const data = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/14/2024 - 7/20/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [4,2,2,1,1,0],
        borderColor: 'orange',
        backgroundColor: 'orange',
        fill: true,
        tension: 0.4, 
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Sales',
        data: [1400,800,500],
        borderColor: 'skyblue',
        backgroundColor: 'skyblue',
        fill: true,
        tension: 0.4, 
        yAxisID: 'y-axis-2',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      'y-axis-2': {
        min:0,
        max:1600,
        type: 'linear',
        position: 'left',
        ticks: {
          stepSize: 400, 
          callback: function(value) {
            return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value.toFixed(1); 
          },
        },
      },
      'y-axis-1': {
        min:0,
        max:4,
        type: 'linear',
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return value.toFixed(0); 
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales vs Orders',
      },
    },
  };

  return (
    <>
      
    <div className="flex w-[900px] flex-col items-center pl-4 ">
     <div className='w-[550px] h-[50px] rounded-md bg-gray-100 mb-[20px] '>
      <div className='bg-white mt-1 ml-1 p-2 w-[100px] rounded-lg'>DashBoard</div>
     </div>
      <div className="border-zinc-100 border-2 border-solid w-[550px] h-[450px]   bg-white">
        <Line className='h-[300px]' data={data} options={options} />
      </div>
    </div>
    </>
  );
}

export default LineChart;

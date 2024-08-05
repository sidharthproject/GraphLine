import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChatSection() {
  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        label: 'Portion of Sales',
        data: [55.8, 44.2],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col w-[280px] h-[520px] items-center p-4 bg-white shadow-md rounded-lg m-[30px]">
      <h2 className="text-lg font-semibold mb-4">Portion of Sales</h2>
      <Pie className='mt-[70px]' data={data} options={options} />
      <div className="mt-4">
        <p className='text-[10px] relative bottom-[170px]'>Total: <span className="font-bold">2659</span></p>
        <p className='text-[9px] relative bottom-[170px] left-[60px]  text-white font-semibold'>55.8</p>
        <p className='text-[9px] relative bottom-[180px] right-5 text-white font-semibold'>44.2</p>
      </div>
    </div>
  );
}

export default PieChatSection;

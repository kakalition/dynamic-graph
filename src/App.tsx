import { Chart as ChartJS, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(...registerables);

export default function App() {
  const [dataset, sDataset] = useState([150]);

  useEffect(() => {
    setTimeout(() => {
      const newArr = [...dataset];
      newArr.push(Math.floor(Math.random() * 50) + 100);
      sDataset(newArr);
    }, 1000);
  }, [dataset]);

  const data = {
    labels: dataset,
    datasets: [{
      label: 'test label',
      data: dataset,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0,
    }],
  };

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center p-16">
      <Line data={data} />
    </div>
  );
}

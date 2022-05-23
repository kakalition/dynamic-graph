import { Chart as ChartJS, registerables } from 'chart.js';
import { useEffect, useMemo, useState } from 'react';
import { Chart, Line } from 'react-chartjs-2';

ChartJS.register(...registerables);

type Dat = {
  label: string,
  dat: number
};

function generateData(data: Dat[]) {
  const newArr = [...data];
  if (newArr.length === 20) newArr.shift();

  const date = new Date();
  const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  const dat = Math.floor(Math.random() * 150) + 20;

  newArr.push({ label: time, dat });
  return newArr;
}

export default function App() {
  const [dataset, sDataset] = useState<Dat[]>([{ label: '*', dat: 0 }]);

  useEffect(() => {
    setTimeout(() => {
      const newArr = [...dataset];
      if (newArr.length === 20) newArr.shift();

      const date = new Date();
      const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
      const dat = Math.floor(Math.random() * 150) + 20;

      newArr.push({ label: time, dat });
      sDataset(newArr);
    }, 1000);
  }, [dataset]);

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center p-16">
      <Chart
        type="line"
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              display: true,
              min: 0,
              max: 200,
            },
          },
        }}
        data={{
          labels: dataset.map((value) => value.label),
          datasets: [{
            label: 'test label',
            data: dataset.map((value) => value.dat),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0,
          }],
        }}
      />
    </div>
  );
}

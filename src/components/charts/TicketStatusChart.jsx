import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PieController,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the necessary components for the Pie chart
ChartJS.register(ArcElement, Tooltip, Legend, PieController, ChartDataLabels);

const TicketStatusChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const chartData = {
      labels: ["5%", "15%", "15%", "15%", "10%", "40%"],
      datasets: [
        {
          label: 'Ticket Status',
          data: [5, 15, 15, 15, 10, 40],
          backgroundColor: ['#EADEFE', '#D9D9D9', '#F9F0DE', '#fb5e5a40', '#C5DCF2', '#F3F8FC'],
          borderColor: ['#EADEFE', '#D9D9D9', '#F9F0DE', '#fb5e5a40', '#C5DCF2', '#F3F8FC'],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
        },
        datalabels: {
          display: true,
          color: '#000',
          font: {
            size: 6,
            weight: 'normal',
          },
          formatter: (value, context) => {
            const label = context.chart.data.labels[context.dataIndex];
            return `${label}`;
          },
          anchor: 'center',
          align: 'center',
        },
      },
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new ChartJS(ctx, {
      type: 'pie',
      data: chartData,
      options,
    });
  }, [data]);

  return (
    <div className="chart-section">
      <canvas ref={chartRef} width={400} height={200}></canvas>
    </div>
  );
};

export default TicketStatusChart;

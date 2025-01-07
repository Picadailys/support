import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components for the Donut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const TicketChannelChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const chartData = {
      datasets: [
        {
          label: 'Ticket Channel',
          data: [30, 15, 10, 5],
          backgroundColor: ['#1974CD', '#F7A603', '#002564', '#B439DA'],
          borderColor: ['#1974CD', '#F7A603', '#002564', '#B439DA'],
          borderWidth: 1,
          borderRadius: 10, // Adds rounded corners to each segment
          spacing: 10, // Adds spacing between segments
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      cutout: '90%', // Makes it a donut chart
      rotation: -90, // Rotates the chart to start from the top
      circumference: 180, // Displays only half of the circle (180 degrees)
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
        },
        datalabels: {
          formatter: () => '', // Removes data labels
        },
      },
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new ChartJS(ctx, {
      type: 'doughnut',
      data: chartData,
      options,
    });
  }, [data]);

  return (
    <div className="doughnut-chart-section">
      <canvas ref={chartRef} width={400} height={200}></canvas>
      
    </div>
  );
};

export default TicketChannelChart;

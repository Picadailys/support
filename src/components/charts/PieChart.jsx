import { useEffect } from "react";
import ApexCharts from "apexcharts";

const PieChart = ({ options, ...props }) => {
  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#pie-chart"), options);
    chart.render();

    // Cleanup chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="pie-chart" {...props}></div>;
};

export default PieChart;

import { useEffect } from "react";
import ApexCharts from "apexcharts";

const StackedColumnChart = ({ options, ...props }) => {
  useEffect(() => {
    const chart = new ApexCharts(
      document.querySelector("#stacked-column-chart"),
      options
    );

    chart.render();

    // Cleanup chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="stacked-column-chart" {...props}></div>;
};

export default StackedColumnChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = () => {
  const barChartData = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        data: [2000, 3000, 1000, 4000, 5000, 2000],
        label: "Stonks",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true,
      },
    ],
  };

  const barChart = (
    <Bar type="bar" width={130} height={50} data={barChartData} />
  );
  return barChart;
};

export default BarChart;

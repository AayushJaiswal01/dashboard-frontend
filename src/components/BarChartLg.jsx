import React from "react";
import { Bar } from "react-chartjs-2";

const BarChartLg = () => {
  const barChartData = {
    labels: ["January", "Feburary", "March", "October", "November", "December"],
    datasets: [
      {
        data: [1000, 4000, 5000, 3000, 2000, 1000],
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true,
      },
      {
        data: [3000, 2000, 1000, 4000, 5000, 6000],
        borderColor: "#ff3333",
        backgroundColor: "#2bebc8",
        fill: true,
      },
    ],
  };

  const barChart = (
    <Bar
      type="bar"
      width={130}
      height={50}
      data={barChartData}
      options={{
        plugins: {
          legend: {
            display: false,
            title: false,
            labels: false,
          },
        },
      }}
    />
  );
  return barChart;
};

export default BarChartLg;

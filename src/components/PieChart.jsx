import React from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = "rgb(0, 0, 156)";
Chart.defaults.plugins.legend.position = "right";
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.font = "Helvetica Neue";

const data = {
  labels: ["300", "300", "400"],
  datasets: [
    {
      data: [30, 30, 40],
      backgroundColor: ["#2BEBC8", "#FF7777", "#694BDB"],
      borderWidth: 1,
      radius: "40%",
    },
  ],
};

function PieChart() {
  return (
    <div>
      <Doughnut
        data={data}
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
    </div>
  );
}

export default PieChart;

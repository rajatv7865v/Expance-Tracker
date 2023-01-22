import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const Chartjs = ({expanse}) => {

  const dataset = [];
  const labels = [];
  for (const val of expanse) {
    dataset.push(val.expanse);
    labels.push(val.date);
  }
  // console.log("dataset1",dataset)

  const data=({
    labels,
    datasets: [
      {
        label: "Income",
        data: dataset,
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
      
    ],
  });
  // console.log("Income",Income)

  return (
    <div style={{ width: "80%", height: "50%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chartjs;

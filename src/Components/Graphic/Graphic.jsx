import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function Graphic({ data }) {
  const isPositive = data[data.length - 1] >= data[0];
  const color = isPositive ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)";

  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        data: data,
        borderColor: color,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return <Line data={chartData} options={options} />;
}

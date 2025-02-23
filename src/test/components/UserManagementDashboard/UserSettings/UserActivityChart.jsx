import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserActivityChart = () => {
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
	// Mock data for user activity for the last week
	const dummyData = {
	  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	  datasets: [
		{
		  label: "User Activity",
		  data: [50, 75, 150, 100, 200, 175, 225],
		  borderColor: "#007bff",
		  backgroundColor: "rgba(0,123,255,0.1)",
		  borderWidth: 2,
		  pointRadius: 5,
		  tension: 0.4,
		},
	  ],
	};
	setActivityData(dummyData);
  }, []);

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    title: {
      display: true,
      text: 'User Activity Over the Last Week',
    },
  },
	scales: {
	  y: {
		beginAtZero: true,
		title: {
		  display: true,
		  text: "Number of Activities",
		},
	  },
	  x: {
		title: {
		  display: true,
		  text: "Day of the Week",
		},
	  },
	},
  };

  return (
	<div style={{ height: "300px", width: "100%" }}>
	  {activityData ? (
		<Line data={activityData} options={options} />
	  ) : (
		<p>Loading chart...</p>
	  )}
	</div>
  );
};

export default UserActivityChart;
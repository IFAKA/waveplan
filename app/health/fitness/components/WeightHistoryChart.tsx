"use client";

import { FC } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface WeightHistoryChartProps {
    weightHistory: { date: string; weight: number }[];
}

const WeightHistoryChart: FC<WeightHistoryChartProps> = ({ weightHistory }) => {
    const dates = weightHistory.map((entry) => entry.date);
    const weights = weightHistory.map((entry) => entry.weight);

    const chartData = {
        labels: dates,
        datasets: [
            {
                label: "Weight lifted (kg)",
                data: weights,
                borderColor: "#4caf50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Date",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Weight (kg)",
                },
            },
        },
    };

    return <Line data={chartData} options={chartOptions} />;
};

export default WeightHistoryChart;

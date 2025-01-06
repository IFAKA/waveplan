// /components/StatisticsChart.tsx

"use client";

import { FC } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface StatisticsChartProps {
    chartData: { labels: string[]; datasets: any[] };
}

const StatisticsChart: FC<StatisticsChartProps> = ({ chartData }) => (
    <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Progress Chart</h3>
        <Line data={chartData} />
    </div>
);

export default StatisticsChart;

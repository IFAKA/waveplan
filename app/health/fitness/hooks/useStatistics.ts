// /hooks/useStatistics.ts

import { useMemo } from "react";

export const useStatistics = (exercises: { name: string; weightHistory: number[] }[]) => {
    const chartData = useMemo(() => {
        const labels = exercises[0]?.weightHistory.map((_, idx) => `Set ${idx + 1}`) || [];

        const datasets = exercises.map((exercise) => ({
            label: exercise.name,
            data: exercise.weightHistory,
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            fill: true,
        }));

        return { labels, datasets };
    }, [exercises]);

    return chartData;
};

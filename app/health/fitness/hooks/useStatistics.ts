// /hooks/useStatistics.ts

import { useMemo } from "react";
import { Exercise } from "../types";

export const useStatistics = (exercises: Exercise[]) => {
  const chartData = useMemo(() => {
    const labels =
      exercises[0]?.progress.map((_, idx) => `Set ${idx + 1}`) || [];

    const datasets = exercises.map((exercise) => ({
      label: exercise.name,
      data: exercise.progress,
      borderColor: "#4CAF50",
      backgroundColor: "rgba(76, 175, 80, 0.2)",
      fill: true,
    }));

    return { labels, datasets };
  }, [exercises]);

  return chartData;
};

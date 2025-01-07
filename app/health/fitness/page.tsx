"use client";

import { FC, useState } from "react";
import EditRoutine from "./components/EditRoutine";
import ExerciseList from "./components/ExerciseList";
import RestDayView from "./components/RestDayView";
import RestTimer from "./components/RestTimer";
// import StatisticsChart from "./components/StatisticsChart";
import { FITNESS_REST_TIME } from "./constants";
import { defaultRoutine } from "./data";
import { useCurrentDay } from "./hooks/useCurrentDay";
import { useRoutine } from "./hooks/useRoutine";
import { useRoutineState } from "./hooks/useRoutineState";
// import { useStatistics } from "./hooks/useStatistics";
import { isRestDayForRoutine } from "./utils/routineUtils";

const Fitness: FC = () => {
  const [viewMode, setViewMode] = useState<
    "routine" | "statistics" | "editing"
  >("routine");
  const [restTime, setRestTime] = useState(FITNESS_REST_TIME);

  const { selectedDayIndex } = useCurrentDay();
  const { routine, completeSet, addExerciseBuilder, currentExerciseIndex } =
    useRoutine(defaultRoutine, selectedDayIndex);
  const { handleEditRoutine } = useRoutineState();
  // const chartData = useStatistics(routine.routines[selectedDayIndex].exercises);

  const addExercise = ({
    name,
    sets,
    reps,
  }: {
    name: string;
    sets: number;
    reps: number;
  }) =>
    addExerciseBuilder({
      name,
      sets,
      reps,
    });

  const isRestDay = isRestDayForRoutine(routine.routines[selectedDayIndex]);

  const hasMoreExercisesToDo =
    currentExerciseIndex < routine.routines[selectedDayIndex].exercises.length;

  // **Handler Functions**
  const handleRoutineClick = () => setViewMode("routine");
  const handleStatisticsClick = () => setViewMode("statistics");
  const handleEditClick = () => setViewMode("editing");
  const handleExitEditing = () => setViewMode("routine");

  return (
    <div className="dark:bg-slate-800 dark:text-white bg-slate-200 rounded-lg min-h-screen flex flex-col justify-between">
      <header className="flex justify-between items-center bg-white dark:bg-slate-900 shadow">
        <div className="flex flex-wrap justify-end">
          <button
            className={`px-4 py-2 text-lg ${
              viewMode === "routine"
                ? "bg-white text-blue-500 font-semibold border-r border-blue-200"
                : "bg-white text-black"
            }`}
            onClick={handleRoutineClick}
          >
            Routine
          </button>

          <button
            className={`px-4 py-2 text-lg ${
              viewMode === "editing"
                ? "bg-white text-blue-500 font-semibold border-x border-blue-200"
                : "bg-white text-blue-400"
            }`}
            onClick={handleEditClick}
          >
            Edit
          </button>

          <button
            className={`px-4 py-2 text-lg ${
              viewMode === "statistics"
                ? "bg-white text-blue-500 font-semibold border-l border-blue-200"
                : "bg-white text-blue-400"
            }`}
            onClick={handleStatisticsClick}
          >
            Statistics
          </button>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4">
        {viewMode === "statistics" ? (
          <>{/* <StatisticsChart chartData={chartData} /> */}</>
        ) : viewMode === "editing" ? (
          <EditRoutine
            restTime={restTime}
            routine={routine}
            selectedDayIndex={selectedDayIndex}
            editRoutine={handleEditRoutine}
            addExercise={addExercise}
            setRestTime={setRestTime}
            setIsEditing={handleExitEditing} // Using a dedicated function
          />
        ) : isRestDay ? (
          <RestDayView />
        ) : (
          <>
            <ExerciseList
              exercises={routine.routines[selectedDayIndex].exercises}
              currentExerciseIndex={currentExerciseIndex}
            />
            <div className="dark:text-black bg-white p-4">
              {!isRestDay && hasMoreExercisesToDo && (
                <RestTimer restTime={restTime} onFinish={completeSet} />
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Fitness;

// /pages/Fitness.tsx

"use client";

import { FC, useState } from "react";
import { DropdownMenuDemo } from "./components/DropdownMenuDemo";
import EditRoutine from "./components/EditRoutine";
import ExerciseList from "./components/ExerciseList";
import RestDayView from "./components/RestDayView";
import RestTimer from "./components/RestTimer";
import StatisticsChart from "./components/StatisticsChart";
import { FITNESS_REST_TIME } from "./constants";
import { defaultRoutine } from "./data";
import { useCurrentDay } from "./hooks/useCurrentDay";
import { useRoutine } from "./hooks/useRoutine";
import { useRoutineState } from "./hooks/useRoutineState";
import { useStatistics } from "./hooks/useStatistics";
import { Exercise } from "./types";

const Fitness: FC = () => {
  const [showStatistics] = useState<boolean>(false); // Toggle statistics mode
  const [restTime, setRestTime] = useState<number>(FITNESS_REST_TIME);

  const { selectedDayIndex } = useCurrentDay();
  const { routine, completeSet, addExerciseBuilder, currentExerciseIndex } =
    useRoutine(defaultRoutine, selectedDayIndex);
  const { isEditing, setIsEditing, handleEditRoutine } = useRoutineState();
  const chartData = useStatistics(routine[selectedDayIndex].exercises);

  // const days = routine.map((day) => ({ dayOfWeek: day.dayOfWeek, routineName: day.routineName }));

  // const toggleStatisticsMode = () => {
  //     setShowStatistics((prev) => !prev);
  //     setIsEditing(false);
  // };

  // const toggleEditingMode = () => {
  //     setIsEditing((prev) => !prev);
  //     setShowStatistics(false);
  // }

  const isRestDay = routine[selectedDayIndex]?.dayOfWeek === "Sunday";

  const hasMoreExercisesToDo = routine[selectedDayIndex].exercises.some(
    ({ sets }) => sets > 0
  );

  const addExercise = (exercise: Exercise) => {
    addExerciseBuilder(selectedDayIndex, exercise);
  };

  return (
    <div className="dark:bg-slate-800 dark:text-white bg-slate-200 rounded-lg min-h-screen flex flex-col justify-between">
      <header className="flex justify-between items-center bg-white dark:bg-slate-900 shadow p-4">
        {/* <div className="flex justify-between items-center"> */}
        <h2 className="text-2xl font-bold">Routine</h2>
        <DropdownMenuDemo />
        {/* <DaySelector
                        selectedDayIndex={selectedDayIndex}
                        setSelectedDayIndex={setSelectedDayIndex}
                        days={days}
                    /> */}
        {/* </div> */}

        {/* <div className="flex gap-2 flex-wrap">
                    <button
                        className={`bg-blue-500 text-white px-2.5 py-0.5 rounded ${showStatistics ? "bg-slate-600" : ""}`}
                        onClick={toggleStatisticsMode}
                    >
                        View Statistics
                    </button>

                    <button
                        className={`bg-blue-500 text-white px-2.5 py-0.5 rounded ${isEditing ? "bg-slate-600" : ""}`}
                        onClick={toggleEditingMode}
                    >
                        Edit Routine
                    </button>
                </div> */}
      </header>
      <>
        {showStatistics ? (
          <StatisticsChart chartData={chartData} />
        ) : isEditing ? (
          <EditRoutine
            restTime={restTime}
            routine={routine}
            selectedDayIndex={selectedDayIndex}
            editRoutine={handleEditRoutine}
            addExercise={addExercise}
            setRestTime={setRestTime}
            setIsEditing={setIsEditing}
          />
        ) : (
          <>
            {isRestDay ? (
              <RestDayView />
            ) : (
              <ExerciseList
                exercises={routine[selectedDayIndex].exercises}
                currentExerciseIndex={currentExerciseIndex}
              />
            )}
          </>
        )}
      </>

      <footer className="dark:text-black bg-white p-4">
        {!isRestDay && hasMoreExercisesToDo && (
          <RestTimer restTime={restTime} onFinish={completeSet} />
        )}
      </footer>
    </div>
  );
};

export default Fitness;

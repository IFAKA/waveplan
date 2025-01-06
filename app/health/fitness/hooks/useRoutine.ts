import { useState } from "react";
import { Exercise, Routine } from "../types";

export const useRoutine = (
  defaultRoutine: Routine,
  selectedDayIndex: number
) => {
  const [routine, setRoutine] = useState<Routine>(defaultRoutine);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);

  const completeSet = (weight: number) => {
    // Create a copy of the routine and modify it
    const updatedRoutine = [...routine];
    const currentExercise = {
      ...updatedRoutine[selectedDayIndex].exercises[currentExerciseIndex],
    };

    // Update sets and weight history
    if (currentExercise.sets > 0) {
      currentExercise.sets -= 1;
      currentExercise.weightHistory.push(weight);
    }

    // If sets are done, move to next exercise
    if (
      currentExercise.sets === 0 &&
      updatedRoutine[selectedDayIndex].exercises.length >
        currentExerciseIndex + 1
    ) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
    }

    // Update the routine with the modified exercise
    updatedRoutine[selectedDayIndex].exercises[currentExerciseIndex] =
      currentExercise;
    setRoutine(updatedRoutine);
  };

  const addExerciseBuilder = (
    selectedDayIndex: number,
    newExercise: Exercise
  ) => {
    const updatedRoutine = [...routine];
    updatedRoutine[selectedDayIndex].exercises.push(newExercise);
    setRoutine(updatedRoutine);
  };

  const editRoutine = (
    dayIndex: number,
    updatedExercises: {
      name: string;
      sets: number;
      reps: number;
      weightHistory: number[];
    }[]
  ) => {
    // Create a copy of the routine and update the exercises for the given day
    const updatedRoutine = [...routine];
    updatedRoutine[dayIndex].exercises = updatedExercises;
    setRoutine(updatedRoutine);
  };

  return {
    routine,
    setRoutine,
    completeSet,
    addExerciseBuilder,
    editRoutine,
    currentExerciseIndex,
  };
};

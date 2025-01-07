import { useState } from "react";
import { Exercise, Routine, StrengthExercise } from "../types";

export const useRoutine = (
  defaultRoutine: Routine,
  selectedDayIndex: number
) => {
  const [routine, setRoutine] = useState<Routine>(defaultRoutine);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);

  const completeSet = (weight: number) => {
    // Clone the routine for immutability
    const updatedRoutine = { ...routine };
    const currentDayRoutine = updatedRoutine.routines[selectedDayIndex];
    const currentExercise = currentDayRoutine.exercises[
      currentExerciseIndex
    ] as StrengthExercise;

    // Ensure that we are updating the sets only once
    if (currentExercise.sets > 0) {
      currentExercise.sets -= 1;

      // Update the progress and weights
      currentExercise.progress.push({
        date: new Date(), // Current date of the progress
        maxWeight: Math.max(...currentExercise.lastWeights, weight),
        lastWeights: [...currentExercise.lastWeights, weight],
      });
    }

    // If all sets are done, move to the next exercise
    if (
      currentExercise.sets === 0 &&
      currentDayRoutine.exercises.length > currentExerciseIndex + 1
    ) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
    }

    // Update the routine with the modified exercise
    currentDayRoutine.exercises[currentExerciseIndex] = currentExercise;

    // Update the routine state with the new changes
    setRoutine(updatedRoutine);
  };

  const addExerciseBuilder = ({
    name,
    reps,
    sets,
  }: {
    name: string;
    sets: number;
    reps: number;
  }) => {
    const updatedRoutine = { ...routine };
    updatedRoutine.routines[selectedDayIndex].exercises.push({
      name,
      reps,
      sets,
      type: "strength",
      restTime: 60,
      id: `${name}-${Date.now()}`,
      lastWeights: [0],
      progress: [],
    });
    setRoutine(updatedRoutine);
  };

  const editRoutine = (dayIndex: number, updatedExercises: Exercise[]) => {
    // Create a copy of the routine and update the exercises for the given day
    const updatedRoutine = { ...routine };
    updatedRoutine.routines[dayIndex].exercises = updatedExercises;
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

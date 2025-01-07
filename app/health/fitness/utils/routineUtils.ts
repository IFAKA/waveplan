import {
  CardioExercise,
  DayRoutine,
  Exercise,
  StrengthExercise,
} from "../types";

export function getRoutineName(daysPerWeek: number) {
  const names = {
    1: "Full Body Routine",
    2: "Upper Lower Routine",
    3: "Push Pull Legs Routine",
    4: "Upper Lower Split",
    5: "PPL + Accessories Routine",
    6: "Advanced PPL Routine",
    7: "Daily Full Split",
  };
  return names[daysPerWeek as keyof typeof names] || "Custom Routine";
}

export function getAllowedDayRoutineNames(daysPerWeek: number) {
  if (daysPerWeek === 1) return ["Full Body"];
  if (daysPerWeek === 2) return ["Upper Body", "Lower Body", "Full Body"];
  if (daysPerWeek === 3) return ["Push", "Pull", "Legs"];
  if (daysPerWeek === 4) return ["Upper Body", "Lower Body"];
  if (daysPerWeek === 5)
    return ["Push", "Pull", "Legs", "Accessories", "Full Body"];
  if (daysPerWeek === 6) return ["Push", "Pull", "Legs"];
  if (daysPerWeek === 7) return ["Push", "Pull", "Legs", "Accessories"];
  return [];
}

/**
 * Determines if a given day in the routine is a rest day.
 * @param dayRoutine - The day's routine data.
 * @returns True if it's a rest day; otherwise, false.
 */
export const isRestDayForRoutine = (dayRoutine: DayRoutine): boolean => {
  if (!dayRoutine) return true; // Fallback for undefined or null
  return dayRoutine.exercises.length === 0; // A day with no exercises is considered a rest day
};

// Type guard for StrengthExercise
export function isStrengthExercise(
  exercise: Exercise
): exercise is StrengthExercise {
  return exercise.type === "strength";
}

// Type guard for CardioExercise
export function isCardioExercise(
  exercise: Exercise
): exercise is CardioExercise {
  return exercise.type === "cardio";
}

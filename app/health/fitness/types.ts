export interface BaseExercise {
  id: string;
  name: string; // Added exercise name
  type: "strength" | "cardio";
  restTime: number; // Rest time between sets or intervals
}

export interface StrengthExercise extends BaseExercise {
  type: "strength";
  sets: number; // Number of sets
  reps: number; // Number of repetitions per set
  lastWeights: number[]; // Last lifted weights for each set
  progress: StrengthProgress[]; // Array of progress entries
}

export interface CardioExercise extends BaseExercise {
  type: "cardio";
  intervals: number; // Number of intervals
  trainingTime: number; // Duration of each interval in seconds
  progress: CardioProgress[]; // Array of progress entries
}

export interface StrengthProgress {
  maxWeight: number; // Moved to Progress
  lastWeights: number[]; // Tracks the most recent weights lifted for the exercise
  date: Date; // Date when the progress was made (could be in ISO format or timestamp)
}

export interface CardioProgress {
  totalDuration: number; // Moved to Progress
  lastDurations: number[]; // Tracks the most recent durations for the exercise
  date: Date; // Date when the progress was made (could be in ISO format or timestamp)
}

export interface Routine {
  name: string; // Automatically generated based on days per week
  daysPerWeek: number; // Number of workout days (1-7)
  routines: DayRoutine[]; // Array of day routines
}

export interface DayRoutine {
  dayOfWeek: number; // 0 for Sunday, 1 for Monday, etc.
  name:
    | "Full Body"
    | "Upper Body"
    | "Lower Body"
    | "Push"
    | "Pull"
    | "Legs"
    | "Accessories"; // Restricted names
  exercises: Exercise[]; // Exercises for that day
}

export type Exercise = StrengthExercise | CardioExercise;

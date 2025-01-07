import { Routine } from "./types";

export const defaultRoutine: Routine = {
  name: "Weekly Routine",
  daysPerWeek: 6,
  routines: [
    {
      dayOfWeek: 1, // Monday
      name: "Push",
      exercises: [
        {
          id: "push-ups-1",
          type: "strength",
          name: "Push-ups",
          sets: 3,
          reps: 12,
          restTime: 60,
          lastWeights: [0],
          progress: [
            {
              date: new Date("2025-01-01"),
              maxWeight: 0,
              lastWeights: [0],
            },
          ],
        },
        {
          id: "bench-press-1",
          type: "strength",
          name: "Bench Press",
          sets: 3,
          reps: 10,
          restTime: 90,
          lastWeights: [60, 65, 70],
          progress: [
            {
              date: new Date("2025-01-02"),
              maxWeight: 75,
              lastWeights: [60, 65, 70],
            },
          ],
        },
        {
          id: "shoulder-press-1",
          type: "strength",
          name: "Shoulder Press",
          sets: 3,
          reps: 12,
          restTime: 75,
          lastWeights: [30, 35, 40],
          progress: [
            {
              date: new Date("2025-01-03"),
              maxWeight: 45,
              lastWeights: [30, 35, 40],
            },
          ],
        },
      ],
    },
    {
      dayOfWeek: 2, // Tuesday
      name: "Pull",
      exercises: [
        {
          id: "pull-ups-1",
          type: "strength",
          name: "Pull-ups",
          sets: 3,
          reps: 8,
          restTime: 90,
          lastWeights: [0],
          progress: [
            {
              date: new Date("2025-01-04"),
              maxWeight: 0,
              lastWeights: [0],
            },
          ],
        },
        {
          id: "pull-ups-1",
          type: "strength",
          name: "Pull-ups",
          sets: 3,
          reps: 8,
          restTime: 90,
          lastWeights: [0],
          progress: [
            {
              date: new Date("2025-01-04"),
              maxWeight: 0,
              lastWeights: [0],
            },
          ],
        },
        {
          id: "pull-ups-1",
          type: "strength",
          name: "Pull-ups",
          sets: 3,
          reps: 8,
          restTime: 90,
          lastWeights: [0],
          progress: [
            {
              date: new Date("2025-01-04"),
              maxWeight: 0,
              lastWeights: [0],
            },
          ],
        },
        {
          id: "pull-ups-1",
          type: "strength",
          name: "Pull-ups",
          sets: 3,
          reps: 8,
          restTime: 90,
          lastWeights: [0],
          progress: [
            {
              date: new Date("2025-01-04"),
              maxWeight: 0,
              lastWeights: [0],
            },
          ],
        },
        {
          id: "deadlifts-1",
          type: "strength",
          name: "Deadlifts",
          sets: 3,
          reps: 8,
          restTime: 120,
          lastWeights: [100, 110, 120],
          progress: [
            {
              date: new Date("2025-01-05"),
              maxWeight: 130,
              lastWeights: [100, 110, 120],
            },
          ],
        },
        {
          id: "bicep-curls-1",
          type: "strength",
          name: "Bicep Curls",
          sets: 3,
          reps: 12,
          restTime: 60,
          lastWeights: [15, 17.5, 20],
          progress: [
            {
              date: new Date("2025-01-06"),
              maxWeight: 22.5,
              lastWeights: [15, 17.5, 20],
            },
          ],
        },
      ],
    },
    {
      dayOfWeek: 3, // Wednesday
      name: "Legs",
      exercises: [
        {
          id: "squats-1",
          type: "strength",
          name: "Squats",
          sets: 4,
          reps: 10,
          restTime: 90,
          lastWeights: [60, 70, 80],
          progress: [
            {
              date: new Date("2025-01-07"),
              maxWeight: 90,
              lastWeights: [60, 70, 80],
            },
          ],
        },
        {
          id: "leg-press-1",
          type: "strength",
          name: "Leg Press",
          sets: 4,
          reps: 12,
          restTime: 120,
          lastWeights: [140, 150, 160],
          progress: [
            {
              date: new Date("2025-01-08"),
              maxWeight: 170,
              lastWeights: [140, 150, 160],
            },
          ],
        },
        {
          id: "calf-raises-1",
          type: "strength",
          name: "Calf Raises",
          sets: 3,
          reps: 15,
          restTime: 60,
          lastWeights: [40, 45, 50],
          progress: [
            {
              date: new Date("2025-01-09"),
              maxWeight: 55,
              lastWeights: [40, 45, 50],
            },
          ],
        },
      ],
    },
    {
      dayOfWeek: 4, // Thursday
      name: "Push",
      exercises: [
        {
          id: "incline-bench-press-1",
          type: "strength",
          name: "Incline Bench Press",
          sets: 3,
          reps: 10,
          restTime: 90,
          lastWeights: [40, 45, 50],
          progress: [
            {
              date: new Date("2025-01-10"),
              maxWeight: 55,
              lastWeights: [40, 45, 50],
            },
          ],
        },
        {
          id: "overhead-press-1",
          type: "strength",
          name: "Overhead Press",
          sets: 3,
          reps: 10,
          restTime: 75,
          lastWeights: [25, 30, 35],
          progress: [
            {
              date: new Date("2025-01-11"),
              maxWeight: 40,
              lastWeights: [25, 30, 35],
            },
          ],
        },
        {
          id: "dips-1",
          type: "strength",
          name: "Dips",
          sets: 3,
          reps: 8,
          restTime: 60,
          lastWeights: [0],
          progress: [
            {
              date: new Date("2025-01-12"),
              maxWeight: 0,
              lastWeights: [0],
            },
          ],
        },
      ],
    },
    {
      dayOfWeek: 5, // Friday
      name: "Pull",
      exercises: [
        {
          id: "chin-ups-1",
          type: "strength",
          name: "Chin-ups",
          sets: 3,
          reps: 8,
          restTime: 90,
          lastWeights: [0],
          progress: [
            {
              date: new Date("2025-01-13"),
              maxWeight: 0,
              lastWeights: [0],
            },
          ],
        },
        {
          id: "barbell-rows-1",
          type: "strength",
          name: "Barbell Rows",
          sets: 3,
          reps: 10,
          restTime: 120,
          lastWeights: [50, 55, 60],
          progress: [
            {
              date: new Date("2025-01-14"),
              maxWeight: 65,
              lastWeights: [50, 55, 60],
            },
          ],
        },
        {
          id: "lat-pulldown-1",
          type: "strength",
          name: "Lat Pulldown",
          sets: 3,
          reps: 12,
          restTime: 75,
          lastWeights: [40, 45, 50],
          progress: [
            {
              date: new Date("2025-01-15"),
              maxWeight: 55,
              lastWeights: [40, 45, 50],
            },
          ],
        },
      ],
    },
    {
      dayOfWeek: 6, // Saturday
      name: "Legs",
      exercises: [
        {
          id: "lunges-1",
          type: "strength",
          name: "Lunges",
          sets: 4,
          reps: 12,
          restTime: 90,
          lastWeights: [40, 45, 50],
          progress: [
            {
              date: new Date("2025-01-16"),
              maxWeight: 55,
              lastWeights: [40, 45, 50],
            },
          ],
        },
        {
          id: "leg-curls-1",
          type: "strength",
          name: "Leg Curls",
          sets: 3,
          reps: 10,
          restTime: 120,
          lastWeights: [30, 35, 40],
          progress: [
            {
              date: new Date("2025-01-17"),
              maxWeight: 45,
              lastWeights: [30, 35, 40],
            },
          ],
        },
        {
          id: "hip-thrusts-1",
          type: "strength",
          name: "Hip Thrusts",
          sets: 4,
          reps: 8,
          restTime: 60,
          lastWeights: [60, 65, 70],
          progress: [
            {
              date: new Date("2025-01-18"),
              maxWeight: 75,
              lastWeights: [60, 65, 70],
            },
          ],
        },
      ],
    },
  ],
};

import { Routine } from "./types";

export const defaultRoutine = [
    {
        dayOfWeek: "Monday",    // Push day
        routineName: "Push",
        exercises: [
            { name: "Push-ups", sets: 3, reps: 12, weightHistory: [] },
            { name: "Bench Press", sets: 3, reps: 10, weightHistory: [] },
            { name: "Shoulder Press", sets: 3, reps: 12, weightHistory: [] },
        ],
    },
    {
        dayOfWeek: "Tuesday",   // Pull day
        routineName: "Pull",
        exercises: [
            { name: "Pull-ups", sets: 3, reps: 8, weightHistory: [] },
            { name: "Deadlifts", sets: 3, reps: 8, weightHistory: [] },
            { name: "Bicep Curls", sets: 3, reps: 12, weightHistory: [] },
        ],
    },
    {
        dayOfWeek: "Wednesday", // Legs day
        routineName: "Legs",
        exercises: [
            { name: "Squats", sets: 3, reps: 10, weightHistory: [] },
            { name: "Leg Press", sets: 3, reps: 12, weightHistory: [] },
            { name: "Lunges", sets: 3, reps: 10, weightHistory: [] },
        ],
    },
    {
        dayOfWeek: "Thursday",  // Push day
        routineName: "Push",
        exercises: [
            { name: "Incline Bench Press", sets: 3, reps: 10, weightHistory: [] },
            { name: "Overhead Press", sets: 3, reps: 10, weightHistory: [] },
            { name: "Triceps Dips", sets: 3, reps: 12, weightHistory: [] },
        ],
    },
    {
        dayOfWeek: "Friday",    // Pull day
        routineName: "Pull",
        exercises: [
            { name: "Lat Pulldown", sets: 3, reps: 10, weightHistory: [] },
            { name: "Rows", sets: 3, reps: 12, weightHistory: [] },
            { name: "Hammer Curls", sets: 3, reps: 12, weightHistory: [] },
        ],
    },
    {
        dayOfWeek: "Saturday",  // Legs day
        routineName: "Legs",
        exercises: [
            { name: "Leg Curls", sets: 3, reps: 12, weightHistory: [] },
            { name: "Leg Extensions", sets: 3, reps: 12, weightHistory: [] },
            { name: "Calf Raises", sets: 3, reps: 15, weightHistory: [] },
        ],
    },
    {
        dayOfWeek: "Sunday",    // Rest day
        routineName: "Rest",
        exercises: [],
    },
] as Routine;

export interface Activity {
    id: string;
    activity: string;
    duration: number;
    restTime: number;
}

export interface DailyRoutines {
    Monday: Activity[];
    Tuesday: Activity[];
    Wednesday: Activity[];
    Thursday: Activity[];
    Friday: Activity[];
    Saturday: Activity[];
    Sunday: Activity[];
}

export interface WeightLog {
    date: string;
    weight: number;
}

// types.ts
export interface Exercise {
    name: string;
    sets: number;
    reps: number;
    weightHistory: number[];
}

export interface DayRoutine {
    dayOfWeek: string;
    routineName: string;
    exercises: Exercise[];
}

export type Routine = DayRoutine[];

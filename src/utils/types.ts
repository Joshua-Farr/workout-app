export interface ExerciseDetails {
  name: string;
  muscleGroup: string;
}

export interface Exercise {
  exerciseDetails: ExerciseDetails;
  exerciseHistory: Set[];
}

export interface Set {
  date: Date;
  reps: number;
  weight: number;
  notes?: string;
}

export interface DaysOfTheWeek {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
}

export interface Exercise {
  name: string;
  muscleGroup: string;
  notes?: string;
  history?: History[];
}

export interface History {
  history: Set[];
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

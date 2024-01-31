import { Exercise, DaysOfTheWeek } from "./types";

export class Workout {
  listOfExercises: Exercise[];
  workoutSchedule: DaysOfTheWeek[];
  constructor() {
    this.listOfExercises = [];
    this.workoutSchedule = [];
  }

  getWorkoutSchedule() {
    return this.getWorkoutSchedule;
  }

  setWorkoutSchedule(newSchedule: DaysOfTheWeek[]) {
    this.workoutSchedule = newSchedule;
  }

  getExercises() {
    return this.listOfExercises;
  }

  addExercise(exercise: Exercise) {
    this.listOfExercises.push(exercise);
  }
}

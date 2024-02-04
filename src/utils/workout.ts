import { Exercise, DaysOfTheWeek } from "./types";

export class Workout {
  workoutName: string;
  workoutSchedule: DaysOfTheWeek[];
  listOfExercises: Exercise[];
  workoutHistory: Date[];
  constructor(name: string) {
    this.workoutName = name;
    this.listOfExercises = [];
    this.workoutSchedule = [];
    this.workoutHistory = [];
  }

  setWorkoutName(name: string) {
    if (name === this.workoutName) {
      console.log(`This workout is already named, ${name}`);
      return;
    }
    this.workoutName = name;
  }

  getWorkoutName() {
    return this.workoutName;
  }

  getWorkoutSchedule() {
    if (!this.workoutSchedule.length) {
      console.log(
        `There is no schedule for ${this.workoutName}, please add workout days to get started!`
      );

      return -1;
    }
    return this.workoutSchedule;
  }

  setWorkoutSchedule(newSchedule: DaysOfTheWeek[]) {
    this.workoutSchedule = newSchedule;
  }

  addExercise(exercise: Exercise) {
    this.listOfExercises.push(exercise);
  }

  getExercises() {
    if (!this.listOfExercises.length) {
      console.log(
        `There are no exercises in ${this.workoutName}, please add a workout to get started!`
      );

      return -1;
    }
    return this.listOfExercises;
  }

  getWorkoutHistory() {
    if (!this.workoutHistory.length) {
      console.log(
        `There is no history for ${this.workoutName}, complete this workout to begin tracking!`
      );
      return -1;
    }
    return this.workoutHistory;
  }
}

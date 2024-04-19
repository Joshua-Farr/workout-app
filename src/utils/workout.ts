import { Exercise, DaysOfTheWeek } from "./types";

export class Workout {
  workoutName: string;
  workoutSchedule: DaysOfTheWeek[];
  workoutExercises: Exercise[];

  constructor(name: string) {
    this.workoutName = name;
    this.workoutExercises = [];
    this.workoutSchedule = [];
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
    this.workoutExercises.push(exercise);
  }

  getExercises() {
    if (!this.workoutExercises.length) {
      console.log(
        `There are no exercises in ${this.workoutName}, please add a workout to get started!`
      );

      return -1;
    }
    return this.workoutExercises;
  }

  getWorkoutHistory() {
    if (!this.workoutExercises.length) {
      console.log(
        `There is no history for ${this.workoutName}, complete this workout to begin tracking!`
      );
      return -1;
    }
    return this.workoutExercises;
  }
}

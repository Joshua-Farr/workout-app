export class Workout {
  workouts: Workout[];

  constructor() {
    this.workouts = [];
  }

  getWorkouts() {
    if (!this.workouts.length) {
      console.log(`You dont have any workouts built!`);
    }
    return this.workouts;
  }

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
  }
}

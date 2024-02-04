// import { getExerciseByName } from "./API/wgerAPI";
import "./App.css";
import { Workout } from "./utils/workout";

function App() {
  const pushDay = new Workout("Push Day");

  // getExerciseByName("back");

  pushDay.addExercise({ name: "tricep curl", muscleGroup: "triceps" });
  pushDay.addExercise({ name: "overhead press", muscleGroup: "shoulders" });
  pushDay.addExercise({ name: "bench press", muscleGroup: "chest" });
  pushDay.addExercise({ name: "pushups", muscleGroup: "chest" });
  const exercises = pushDay.getExercises();

  console.log("***** HERE ARE THE EXERCISES *****");
  // exercises.forEach((exercise: any) => console.log(exercise));
  return <></>;
}

export default App;

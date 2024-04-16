import "./App.css";
import { Workout } from "./utils/workout";

function App() {
  const pushDay = new Workout("Push Day");

  pushDay.addExercise({ name: "tricep curl", muscleGroup: "triceps" });
  pushDay.addExercise({ name: "overhead press", muscleGroup: "shoulders" });
  pushDay.addExercise({ name: "bench press", muscleGroup: "chest" });
  pushDay.addExercise({ name: "pushups", muscleGroup: "chest" });

  return <></>;
}

export default App;

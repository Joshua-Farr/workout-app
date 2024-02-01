import "./App.css";
import { Workout } from "./utils/workout";

function App() {
  const pushDay = new Workout();
  pushDay.addExercise({ name: "bicep curl", muscleGroup: "biceps" });

  return <h1>Hello World!</h1>;
}

export default App;

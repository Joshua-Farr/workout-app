import "./App.css";
// import { Workout } from "./utils/workout";
import { Workout } from "./components/WorkoutSelectorCard/Workout";

function App() {
  //Creating a test workout!

  // const pushDay = new Workout("Push Day");

  // pushDay.addExercise({
  //   exerciseDetails: { name: "tricep curl", muscleGroup: "triceps" },
  //   exerciseHistory: [],
  // });
  // pushDay.addExercise({
  //   exerciseDetails: { name: "overhead press", muscleGroup: "shoulders" },
  //   exerciseHistory: [],
  // });
  // pushDay.addExercise({
  //   exerciseDetails: { name: "bench press", muscleGroup: "chest" },
  //   exerciseHistory: [],
  // });
  // pushDay.addExercise({
  //   exerciseDetails: { name: "pushups", muscleGroup: "chest" },
  //   exerciseHistory: [],
  // });

  return (
    <>
      <Workout />
    </>
  );
}

export default App;

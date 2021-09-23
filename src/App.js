import "./styles.css";
import CreateTask from "./CreateTask";
import RenderTasks from "./RenderTasks";
import { useState } from "react";

export default function App() {
  const loadStorage = () => {
    if (!window.localStorage.getItem("tasks")) {
      return [];
    } else {
      return JSON.parse(window.localStorage.getItem("tasks"));
    }
  };
  const [tasks, setTasks] = useState(loadStorage());
  return (
    <div className="App">
      <div className="container">
        <h1>TODO</h1>
        <CreateTask tasks={tasks} setTasks={setTasks} />

        <RenderTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

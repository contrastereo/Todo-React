import { useEffect, useState } from "react";

function CreateTask(props) {
  //DEFINING STATE
  const tasks = props.tasks;
  const setTasks = props.setTasks;
  const [newTask, setNewTask] = useState("");
  //INPUT
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  //Imput warnings
  const textWarnings = () => {
    if (newTask.length < 5 && newTask.length > 0) {
      return "Your task is too short";
    } else if (newTask.length > 15) {
      return "Your task is too large";
    }
  };
  //SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    const generateKey = (pre) => {
      return `${pre}_${new Date().getTime()}`;
    };
    if (newTask.length > 4 && newTask.length < 18) {
      setTasks([
        ...tasks,
        {
          name: newTask,
          id: generateKey("task"),
          status: true
        }
      ]);
    }
  };

  //STRINGFYING CURRENT STATE
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, []);

  return (
    <div>
      <div
        className={
          (newTask.length < 5 && newTask.length > 0) || newTask.length > 18
            ? "invalidInput taskInput"
            : "taskInput"
        }
      >
        <input
          placeholder="Do Something"
          value={newTask}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Go!
        </button>
      </div>

      <p className="warnings">{textWarnings()}</p>
    </div>
  );
}

export default CreateTask;

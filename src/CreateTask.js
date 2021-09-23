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
    <div className="taskInput">
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
  );
}

export default CreateTask;

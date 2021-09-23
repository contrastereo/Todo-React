const listItem = (props) => {
  let task = props.task;
  const tasks = props.tasks;
  const setTasks = props.setTasks;
  const listStatus = props.listStatus;

  const deleteTask = (task) => {
    setTasks(tasks.filter((i) => i !== task));
  };

  const changeStatus = (e, task) => {
    setTasks(
      tasks.map((taskItem) => {
        if (taskItem.id !== task.id) return taskItem;
        return { ...task, status: !task.status };
      })
    );
  };
  if (task.status == listStatus) {
    return (
      <li key={task.id}>
        <span onClick={(e) => changeStatus(e, task)}>{task.name}</span>
        <button onClick={() => deleteTask(task)} className="btn-delete">
          X
        </button>
      </li>
    );
  }
};

export default ListItem;

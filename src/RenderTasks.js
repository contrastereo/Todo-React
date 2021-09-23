function RenderTasks(props) {
  const tasks = props.tasks;
  const setTasks = props.setTasks;
  // DELETE BTN HANDLER
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
  //handling LIs
  const listItem = (task, listStatus) => {
    if (task.status === listStatus) {
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

  return (
    <div className="allTasks">
      <h2>Unfinished Tasks</h2>
      <ul className="unfinishedTasks">
        {tasks.map((task) => {
          return listItem(task, true);
        })}
      </ul>
      <h2>Finished Tasks</h2>
      <ul className="finishedTasks">
        {tasks.map((task) => {
          return listItem(task, false);
        })}
      </ul>
    </div>
  );
}

export default RenderTasks;

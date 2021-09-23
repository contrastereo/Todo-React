<li key={task.id}>
  <span onClick={(e) => changeStatus(e, task)}>{task.name}</span>
  <button onClick={() => deleteTask(task)} className="btn-delete">
    X
  </button>
</li>;

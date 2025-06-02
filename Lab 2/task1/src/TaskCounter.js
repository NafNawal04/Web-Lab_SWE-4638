function TaskCounter({ tasks }) 
{  
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="task-counter">
      <div className="counter-box">
        <h3>{totalTasks}</h3>
        <p>Total Tasks</p>
      </div>
      <div className="counter-box">
        <h3>{completedTasks}</h3>
        <p>Completed</p>
      </div>
      <div className="counter-box">
        <h3>{remainingTasks}</h3>
        <p>Remaining</p>
      </div>
    </div>
  );
}

export default TaskCounter;

function Task({ task, onToggle, onRemove })
{
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-content" onClick={() => onToggle(task.id)}>
        <span className="task-title">{task.title}</span>
        <span className="task-status">
          {task.completed ? '✓  Completed' : '○  Pending'}
        </span>
      </div>
      <button 
        className="remove-btn"
        onClick={() => onRemove(task.id)}
      >
        Remove
      </button>
    </li>
  );
}

export default Task;
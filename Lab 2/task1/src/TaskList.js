import Task from './Task';


function TaskList({ tasks, onToggle, onRemove }) 
{
  return (
    <ul className="task-list">
      {
      tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TaskList;
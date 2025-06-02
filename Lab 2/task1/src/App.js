import { useState } from 'react';
import TaskList from "./TaskList";
import TaskCounter from "./TaskCounter.js";
import './TaskStyle.css';



function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React basics", completed: false },
    { id: 2, title: "Practice useState hook", completed: true },
    { id: 3, title: "Build first React app", completed: false },
  ]);



  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task 
    ));
  };


  const addRandomTask = () => {
    const randomTasks = [
      "Read documentation",
      "Fix bugs",
      "Write tests",
      "Refactor code",
      "Deploy application"
    ];
  
  
  
    const newTask = {
      id: Date.now(),
      title: randomTasks[Math.floor(Math.random() * randomTasks.length)],
      completed: false
    };
      setTasks([...tasks, newTask]);
    };



  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };


  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };



  return (
    <div>
      <h1>My First Task</h1>
      
      <TaskCounter tasks={tasks} />
      
      <div>
        <button onClick={addRandomTask}>Add Random Task</button>
        <button 
          onClick={clearCompleted} 
          disabled={!tasks.some(task => task.completed)}
        >
          Clear Completed
        </button>
      </div>
      
      <TaskList 
        tasks={tasks} 
        onToggle={toggleTask} 
        onRemove={removeTask} 
      />

    </div>
  );
}

export default App;

import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Get up @5:00 AM",
    "Go for Walking",
    "Take Bath",
    "Take Breakfast",
  ]);
  const [newtask, setNewTask] = useState("");
  function handleinputlist(event) {
    setNewTask(event.target.value);
  }
  function addtask() {
    if (newtask.trim() !== "") {
      setTasks((tasks) => [...tasks, newtask]);
      setNewTask("");
    }
  }
  function deletetask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveup(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function movedown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="todo-app-container">
      <h1 className="heading">To-Do List App</h1>
      <input
        type="text"
        value={newtask}
        onChange={handleinputlist}
        placeholder="Enter your task..."
        className="task-input"
      />
      <button className="add-button" onClick={addtask}>
        Add
      </button>
      <ol className="display-tasks">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="moveup-button" onClick={() => moveup(index)}>
              👆
            </button>
            <button className="movedown-button" onClick={() => movedown(index)}>
              👇
            </button>
            <button className="delete-button" onClick={() => deletetask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;

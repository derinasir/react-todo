import React, { useState, useRef, useEffect } from "react";
import Task from "./components/task";
import "./global.scss";

function App(props) {
  const taskInput = useRef();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const existingTasks = localStorage.getItem("tasks");
    setTasks(existingTasks ? JSON.parse(existingTasks) : []);
  }, []);

  function handleAddTask() {
    const newTasks = [...tasks, taskInput.current.value];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    taskInput.current.value = "";
  }

  function handleDeleteTask(taskname) {
    const existingTasks = [...JSON.parse(localStorage.getItem("tasks"))];
    const newTasks = existingTasks.filter(task => task !== taskname);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>To-do List</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input type="text" ref={taskInput} />
        <button onClick={handleAddTask}>➕</button>
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          rowGap: 20,
        }}
      >
        {tasks.map(task => (
          <Task key={task} task={task} onDeleteTask={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;

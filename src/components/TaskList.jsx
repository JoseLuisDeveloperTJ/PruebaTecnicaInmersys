import React, { useState } from "react";
import TaskItem from "./TaskItem";
import "../App.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setCompletedTasks([
      ...completedTasks,
      { task: taskToComplete, isCompleted: true },
    ]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
    <div className="flex items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="inputTask"
          onKeyPress={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button onClick={addTask} className="inputAdd">
          Agregar
        </button>
      </div>

      <div className="flex flex-col task-list px-10">
        <div className="column-container">
          <ul className="column">
            {tasks.map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                onComplete={() => completeTask(index)}
                onDelete={() => deleteTask(index)}
                isCompleted={false}
              />
            ))}
          </ul>
        </div>

        <div className="column-container mt-4">
          <h1 className="titleTasksCompleted">Completed</h1>
          <ul className="column">
            {completedTasks.map((task, index) => (
              <li className="cardContainer  flex" key={index}>
                <div
                  className={task.isCompleted ? "circle completed" : "circle"}
                ></div>
                <span
                  className={`ml-4 ${task.isCompleted ? "completed-task" : ""}`}
                >
                  {task.task}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TaskList;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Todo.css";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = (event) => {
    remove(event.target.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const toggleCompleted = (event) => {
    toggleComplete(event.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <p>Edit</p>
          </button>
          -
          <button onClick={handleClick}>
            <p id={todo.id}>Delete</p>
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;

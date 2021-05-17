import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import "./newTodoForm.css";

function NewTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = (event) => {
    setUserInput({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { id: uuid(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">ADD ITEM</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
      />
      <button>Add</button>
    </form>
  );
}

export default NewTodoForm;

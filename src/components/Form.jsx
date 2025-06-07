import React, { useState } from "react";
import Tasks, { updateTask } from "../Task";

function Form({ updateTask }) {
  const [newtask, addNewTask] = useState("");
  function changeTask(event) {
    addNewTask(event.target.value);
  }
  function addingTask(event) {
    updateTask((prevValue) => {
      return [...prevValue, newtask];
    });
    addNewTask("");
    event.preventDefault();
  }
  return (
    <form onSubmit={addingTask} className="form-input">
      <input type="text" onChange={changeTask} value={newtask} />
      <button type="submit">ADD</button>
    </form>
  );
}

export default Form;

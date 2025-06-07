import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [tasks, updatetask] = useState([]);
  return (
    <div className="to-dolist">
      <h1 className="heading">To-Do List</h1>
      <Form updateTask={updatetask} />
      <ul>
        {tasks.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

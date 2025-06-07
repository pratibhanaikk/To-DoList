import React from "react";

var Tasks = ["task1", "task2"];

function updateTask(task) {
  Tasks.push(task);
}

export default Tasks;
export { updateTask };

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function() {
  const task = taskInput.value;
  const taskItem = document.createElement("li");
  taskItem.innerText = task;
  taskList.appendChild(taskItem);
  taskInput.value = "";
});
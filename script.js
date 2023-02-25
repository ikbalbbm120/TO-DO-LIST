const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Get tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks on page load
renderTasks();

// Add task event listener
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
});

// Delete task event listener
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    deleteTask(e.target.parentNode.id)
    }
});

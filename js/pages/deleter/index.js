import { deleteTask } from "/js/pages/fetch/tasks/delete/index.js";

const form = document.getElementById('deleter-form')
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const taskId = document.getElementById("taskId").value;

  console.log(taskId)
  await deleteTask(taskId)

  const deletedTask = sessionStorage.getItem('deletedTask')

  console.log(deletedTask)
});
import { getAllTasks, getTask } from "/js/api/tasks/get/index.js";

async function showTask(data) {
  const dataElement = document.getElementById("task-to-show")
  dataElement.innerText = data.nome_projeto

}
async function showAllTasks(data) {
  const dataElement = document.getElementById("tasks-to-show")

  data.forEach(element => {
    const liElement = document.createElement("li")
    liElement.innerText = (element.nome_projeto)
    dataElement.appendChild(liElement)
  });
}

// Mostra todas as tarefas
await getAllTasks()
const fetchedAllTasks = JSON.parse(sessionStorage.getItem('fetchedAllTasks'));
await showAllTasks(fetchedAllTasks)

// Mostra apenas uma tarefa
const form = document.getElementById("taskId-form")
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const taskId = document.getElementById("taskId").value;

  await getTask(taskId)
  const fetchedTask = JSON.parse(sessionStorage.getItem('fetchedTask'));
  await showTask(fetchedTask)
});
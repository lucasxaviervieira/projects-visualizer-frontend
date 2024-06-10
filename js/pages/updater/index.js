import { putTask } from "/js/api/tasks/put/index.js";

const form = document.getElementById('updater-form')
form.addEventListener("submit", async function (event) {
  event.preventDefault();


  const nome_projeto = document.getElementById("project_name").value;
  const nome_tarefa = document.getElementById("task_name").value;
  const data_inicio = document.getElementById("init_date").value;
  const data_final = document.getElementById("end_date").value;
  const progresso = document.getElementById("progress").value;

  const username = localStorage.getItem('username')


  const task_id = document.getElementById("task_id").value;
  const bodyJson = {
    id: task_id,
    nome_projeto,
    nome_tarefa,
    assinado_por: username,
    data_inicio,
    dias_requerido: 15,
    data_final,
    progresso
  }

  await putTask(task_id, bodyJson)

  const updatedTask = JSON.parse(sessionStorage.getItem('updatedTask'));

  console.log(updatedTask)

});
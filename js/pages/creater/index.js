import { createTask } from "/js/pages/fetch/tasks/post/index.js";

const form = document.getElementById('creater-form')
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const nome_projeto = document.getElementById("project_name").value;
  const nome_tarefa = document.getElementById("task_name").value;
  const data_inicio = document.getElementById("init_date").value;
  const data_final = document.getElementById("end_date").value;
  const progresso = document.getElementById("progress").value;

  const username = localStorage.getItem('username')


  const bodyJson = {
    nome_projeto,
    nome_tarefa,
    assinado_por: username,
    data_inicio,
    data_final,
    progresso
  }

  await createTask(bodyJson)

  const createdTask = JSON.parse(sessionStorage.getItem('createdTask'));

  console.log(createdTask)

});
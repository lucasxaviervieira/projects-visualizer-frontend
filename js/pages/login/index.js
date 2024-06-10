import { authApi, encryptPass } from "/js/api/auth/index.js";


const form = document.getElementById("login-form")
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const encPass = encryptPass(password)

  localStorage.setItem('username', username);

  await authApi(username, encPass)

  window.location.href = "http://ambienteteste-front/pages/index.html";

});


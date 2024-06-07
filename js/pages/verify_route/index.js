const accessToken = localStorage.getItem('BearerToken');


async function redirectPage() {
  const url = window.location.href;

  const match = url.match(/\/pages\/([^\/]+)/);
  const pageName = match ? match[1] : null;


  if (pageName == "login.html") {
    if (accessToken) {
      window.location.href = 'index.html'
    }
  } else {
    if (!accessToken) {
      window.location.href = 'login.html'
    }
  }
}
await redirectPage()

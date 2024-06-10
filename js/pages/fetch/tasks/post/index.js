async function createTask(bodyJson) {
  const accessToken = localStorage.getItem('BearerToken');
  await fetch(`http://ambienteteste/api/routes/tasks.php`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(bodyJson)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        localStorage.removeItem('BearerToken');
        window.location.href = ('login.html')
      }
    })
    .then(data => {
      sessionStorage.setItem('createdTask', JSON.stringify(data));
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

export { createTask }
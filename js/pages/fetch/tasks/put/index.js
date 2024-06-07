async function putTask(id, bodyJson) {
  const accessToken = localStorage.getItem('BearerToken');
  await fetch(`http://ambienteteste/api/routes/tasks.php?id=${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(bodyJson)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Error fetching task');
      }
    })
    .then(data => {
      sessionStorage.setItem('updatedTask', JSON.stringify(data));
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

export { putTask }
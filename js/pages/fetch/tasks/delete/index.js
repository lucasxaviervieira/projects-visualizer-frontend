async function deleteTask(taskId) {
  const accessToken = localStorage.getItem('BearerToken');
  await fetch(`http://ambienteteste/api/routes/tasks.php?id=${taskId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Error deleting task');
      }
    })
    .then(data => {
      sessionStorage.setItem('deletedTask', JSON.stringify(data));
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export { deleteTask }
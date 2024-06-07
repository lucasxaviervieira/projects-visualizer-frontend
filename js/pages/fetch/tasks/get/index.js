async function getAllTasks() {
  const accessToken = localStorage.getItem('BearerToken');
  await fetch('http://ambienteteste/api/routes/tasks.php', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Error fetching tasks');
      }
    })
    .then(data => {
      sessionStorage.setItem('fetchedAllTasks', JSON.stringify(data));
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

async function getTask(taskId) {
  const accessToken = localStorage.getItem('BearerToken');

  await fetch(`http://ambienteteste/api/routes/tasks.php?id=${taskId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Error fetching task');
      }
    })
    .then(data => {
      sessionStorage.setItem('fetchedTask', JSON.stringify(data));
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

export { getAllTasks, getTask }
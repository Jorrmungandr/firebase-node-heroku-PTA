const httpGet = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      callback(request.responseText);
    } else {
      // We reached our target server, but it returned an error
      console.log('server error');
    }
  };

  request.onerror = () => {
    // There was a connection error of some sort
    console.log('connection error');
  };

  request.send();
}

setInterval(() => {
  httpGet('/todoget', (res) => {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';
    const todo = JSON.parse(res);
    console.log('todo');

    Object.keys(todo).reverse().forEach((key) => {
      todoList.innerHTML += `
        <div>
          <h3>${todo[key].todo}</h3>
        </div>
        <hr>
      `;
    });
  });
}, 100);
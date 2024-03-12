let todoList = document.getElementById('todoList');

function addTodo() {
  let todoInput = document.getElementById('todoInput');
  let todoText = todoInput.value.trim();

  if (todoText !== '') {
    let li = document.createElement('li');
    li.textContent = "-> "+ todoText;
    li.classList.add('todo-item');
    todoList.appendChild(li);
    todoInput.value = '';
  }
}
function renderTodo(todo){
    const todoBox = document.createElement('div');
    const todoTitle = document.createElement('h3');
    const todoDesc = document.createElement('p');
    const todoDate = document.createElement('span');
    const todoCheck = document.createElement('span');

    todoTitle.textContent = todo.title;
    todoTitle.classList.add('todoTitle');
    
    todoDesc.textContent = todo.desc;
    todoDesc.classList.add('todoDesc');

    todoDate.textContent = todo.due_date;
    todoDate.classList.add('todoDate');
    
    todoBox.append(todoTitle, todoDesc, todoDate, todoCheck);
}
import { format, parse } from "date-fns";

export default function editTodo(todo){
    todo.style.display = 'none';
    const todoEdit = document.createElement('div');
    todoEdit.classList.add('todoEdit');    
    const todoEditTitle = document.createElement('input');
    todoEditTitle.classList.add('todoEditTitle');
    todoEditTitle.type = 'text';
    const todoTitle = todo.querySelector('.todoTitle');
    todoEditTitle.value = todoTitle.textContent;
    const todoEditDesc = document.createElement('textarea');
    todoEditDesc.classList.add('todoEditDesc');    
    const todoDesc = todo.querySelector('.todoDesc');
    todoEditDesc.textContent = todoDesc.textContent;    
    const todoEditDate = document.createElement('input');
    todoEditDate.classList.add('todoEditDate');
    todoEditDate.type = 'date';
    const todoDate = todo.querySelector('.todoDate');    
    const todoDateFormatted = parse(todoDate.textContent, 'dd-MM-yyyy', new Date());
    const todoDateFormattedUSA = format(todoDateFormatted, "yyyy-MM-dd");    
    todoEditDate.value = todoDateFormattedUSA;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('editTodo');
    todoEdit.append(todoEditTitle, todoEditDesc, todoEditDate, editButton);
    todo.parentNode.insertBefore(todoEdit, todo);
}
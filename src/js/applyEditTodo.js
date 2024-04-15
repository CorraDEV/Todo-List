import { format } from "date-fns";

export default function applyEditTodo(todoEdit){            
    const todo = todoEdit.nextElementSibling;  
    const todoTitle = todo.querySelector('.todoTitle');          
    const todoEditTitle = todoEdit.querySelector('.todoEditTitle');          
    todoTitle.textContent = todoEditTitle.value;        
    todo.style.display = 'block';
    const todoDesc = todo.querySelector('.todoDesc');          
    const todoEditDesc = todoEdit.querySelector('.todoEditDesc');                  
    todoDesc.textContent = todoEditDesc.value;        
    const todoDate = todo.querySelector('.todoDate');          
    const todoEditDateUSA = todoEdit.querySelector('.todoEditDate');          
    const todoEditDateFormatted = format(todoEditDateUSA.value, "dd-MM-yyyy");    
    todoDate.textContent = todoEditDateFormatted;        
    todo.style.display = 'block';
    todoEdit.remove(); 
}
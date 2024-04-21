import first_src from '../img/bin.png';
import second_src from '../img/pencil.png';
import TodoList from './TodoList';
import Todo from './todo';
import { format, parse } from "date-fns";

export default class Project{        
    constructor(title = 'Titolo Progetto', todos = []){        
        this.title = title;
        this.todos = todos;                        
    }            
    
    static deleteTodo(todo){                
        const projectID = todo.parentNode.getAttribute('data-projectid');
        TodoList.projects[projectID].todos.splice(todo.id, 1);        
        todo.remove();        
    }

    static renderTodo({title, desc, due_date, prio, check}){
        const todoBox = document.createElement('div');
        todoBox.classList.add('todoBox');
        const projectTodos = document.querySelector('#projectTodos');                        
        const projectID = projectTodos.getAttribute('data-projectid');        
        todoBox.id = TodoList.projects[projectID].todos.length - 1;                                
        const todoTitle = document.createElement('h3');
        todoTitle.textContent = title;    
        todoTitle.classList.add('todoTitle');        
        const first_icon = document.createElement('img');
        first_icon.classList.add('projectIcon', 'bin');
        first_icon.src = first_src;
        const second_icon = document.createElement('img');
        second_icon.classList.add('projectIcon', 'pencil');
        second_icon.src = second_src;
        const todoDesc = document.createElement('p');
        todoDesc.classList.add('todoDesc');
        todoDesc.textContent = desc;        
        const todoDate = document.createElement('span');
        todoDate.classList.add('todoDate');    
        todoDate.textContent = due_date;            
        const todoCheck = document.createElement('input');
        todoCheck.type = 'checkbox';
        todoCheck.checked = check;
        todoCheck.classList.add('todoCheck');            
        todoBox.append(todoTitle, first_icon, second_icon, todoDesc, todoDate, todoCheck);        
        projectTodos.appendChild(todoBox);                                    
    }
    
    static editTodo(todo){        
        todo.style.display = 'none';
        const todoEdit = document.createElement('div');
        todoEdit.classList.add('todoEdit');    
        const labelTitle = document.createElement('label');        
        labelTitle.textContent = 'Title: ';
        const todoEditTitle = document.createElement('input');
        todoEditTitle.classList.add('todoEditTitle');
        todoEditTitle.type = 'text';
        const todoTitle = todo.querySelector('.todoTitle');
        todoEditTitle.value = todoTitle.textContent;
        const labelDesc = document.createElement('label');        
        labelDesc.textContent = 'Description: ';
        const todoEditDesc = document.createElement('textarea');
        todoEditDesc.classList.add('todoEditDesc');    
        const todoDesc = todo.querySelector('.todoDesc');
        todoEditDesc.textContent = todoDesc.textContent;    
        const labelDate = document.createElement('label');        
        labelDate.textContent = 'Date: ';
        const todoEditDate = document.createElement('input');
        todoEditDate.classList.add('todoEditDate');
        todoEditDate.type = 'date';
        const todoDate = todo.querySelector('.todoDate');    
        const todoDateFormatted = parse(todoDate.textContent, 'dd-MM-yyyy', new Date());
        const todoDateFormattedUSA = format(todoDateFormatted, "yyyy-MM-dd");    
        todoEditDate.value = todoDateFormattedUSA;
        const labelPrio = document.createElement('label');        
        labelPrio.textContent = 'Priority: ';
        const todoEditPrio = document.createElement('select');        
        todoEditPrio.classList.add('todoEditPrio');
        const projectID = todo.parentNode.getAttribute('data-projectid');                
        const prioValue = TodoList.projects[projectID].todos[todo.id].prio;        
        const highPrio = document.createElement('option');
        highPrio.value = 'high';
        highPrio.textContent = 'High';
        const mediumPrio = document.createElement('option');
        mediumPrio.value = 'medium';
        mediumPrio.textContent = 'Medium';
        const lowPrio = document.createElement('option');
        lowPrio.value = 'low';
        lowPrio.textContent = 'Low';
        if(prioValue == 'low'){
            lowPrio.selected = true;
        }
        else if(prioValue == 'medium'){
            mediumPrio.selected = true;
        }
        else if(prioValue == 'high'){
            highPrio.selected = true;
        }
        todoEditPrio.append(highPrio, mediumPrio, lowPrio);
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('editTodo');
        todoEdit.append(labelTitle, todoEditTitle, labelDesc, todoEditDesc, labelPrio, todoEditPrio, labelDate, todoEditDate, editButton);
        todo.parentNode.insertBefore(todoEdit, todo);
    }    

    static applyEditTodo(todoEdit){            
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
        const todoEditPrio = todoEdit.querySelector('.todoEditPrio');        
        todo.style.display = 'block';                 
        const projectID = todo.parentNode.getAttribute('data-projectid');              
        TodoList.projects[projectID].todos[todo.id].title = todoTitle.textContent;
        TodoList.projects[projectID].todos[todo.id].desc = todoDesc.textContent;
        TodoList.projects[projectID].todos[todo.id].prio = todoEditPrio.value;        
        TodoList.projects[projectID].todos[todo.id].due_date = todoDate.textContent;        
        todoEdit.remove();
    }

    static checkTodo(todo){        
        const projectID = todo.parentNode.getAttribute('data-projectid');              
        let todoCheckValue = TodoList.projects[projectID].todos[todo.id].check;
        if(todoCheckValue == false){
            todoCheckValue = true;
        }
        else{
            todoCheckValue = false;
        }
        TodoList.projects[projectID].todos[todo.id].check = todoCheckValue;
    }
}
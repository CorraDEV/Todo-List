import first_src from '../img/bin.png';
import second_src from '../img/pencil.png';
import TodoList from './TodoList';
import Todo from './todo';
import { format, parse } from "date-fns";

export default class Project{        
    constructor(title){        
        this.title = title;
        this.todos = [];                        
    }            
    
    static deleteTodo(todo){                
        const projectID = todo.parentNode.getAttribute('data-projectid');
        TodoList.projects[projectID].todos.splice(todo.id, 1);        
        todo.remove();        
    }

    static addTodo(
        {
            title = 'Title',
            desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, libero similique rerum minima est asperiores repellat harum odit inventore ipsa nam suscipit fuga eos officia tempora sint, aliquid ipsum dicta!',
            due_date = '21-12-2012',
            check = 'SI'
        }
    ){
        const todoBox = document.createElement('div');
        todoBox.classList.add('todoBox');        
        const projectTodos = document.querySelector('#projectTodos');
        const projectID = projectTodos.getAttribute('data-projectid');                         
        const todoBox_id = TodoList.projects[projectID].todos.length;
        todoBox.id = todoBox_id;
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
        const todoCheck = document.createElement('span');                    
        todoCheck.classList.add('todoCheck');    
        todoCheck.textContent = check;   
        todoBox.append(todoTitle, first_icon, second_icon, todoDesc, todoDate, todoCheck);        
        projectTodos.appendChild(todoBox);        
        const todoObj = new Todo(title, desc, due_date, check);        
        TodoList.projects[projectID].todos.push(todoObj);        
    }
    
    static editTodo(todo){
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
        todo.style.display = 'block';
        todoEdit.remove(); 
        const todo_id = todo.id;
        const projectID = todo.parentNode.getAttribute('data-projectid');              
        TodoList.projects[projectID].todos[todo_id].title = todoTitle.textContent;
        TodoList.projects[projectID].todos[todo_id].desc = todoDesc.textContent;
        TodoList.projects[projectID].todos[todo_id].due_date = todoDate.textContent;        
    }
}
import first_src from '../img/bin.png';
import second_src from '../img/pencil.png';
import editTodo from './editTodo';

export default function addTodo(
    {
        title = 'Title',
        desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, libero similique rerum minima est asperiores repellat harum odit inventore ipsa nam suscipit fuga eos officia tempora sint, aliquid ipsum dicta!',
        due_date = '21-12-2012',
        check = 'SI'
    }
){
    const todoBox = document.createElement('div');
    todoBox.classList.add('todoBox');
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
    const projectTodos = document.querySelector('#projectTodos');
    projectTodos.appendChild(todoBox);    
}
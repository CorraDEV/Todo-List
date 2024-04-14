export default function renderTodo(
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
    console.log(title);
    todoTitle.textContent = title;    
    todoTitle.classList.add('todoTitle');
    const todoDesc = document.createElement('p');
    todoDesc.classList.add('todoDesc');
    todoDesc.textContent = desc;
    const todoDate = document.createElement('span');
    todoDate.classList.add('todoDate');    
    todoDate.textContent = due_date;            
    const todoCheck = document.createElement('span');                    
    todoCheck.classList.add('todoCheck');    
    todoCheck.textContent = check;   
    todoBox.append(todoTitle, todoDesc, todoDate, todoCheck);
    const projectTodos = document.querySelector('#projectTodos');
    projectTodos.appendChild(todoBox);
}
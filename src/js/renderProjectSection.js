import TodoList from "./TodoList";

export default function renderProjectSection({title}){
    const add_todo = document.createElement('button');
    add_todo.id = "add_todo_btn";
    add_todo.textContent = "Add Todo";
    const projectBox = document.createElement('div');
    projectBox.id = 'projectBox';         
    const projectTitle = document.createElement('h1');
    projectTitle.id = 'projectTitle';
    projectTitle.textContent = title;
    const projectTodos = document.createElement('div');
    projectTodos.id = 'projectTodos';
    projectTodos.dataset.projectid = TodoList.projects.length - 1;                
    projectBox.append(projectTitle, add_todo, projectTodos);    
    document.body.appendChild(projectBox);                        
}
import addTodo from "./addTodo";

export default function renderProject(){
    const projectBox = document.createElement('div');
    projectBox.id = 'projectBox'; 
    const projectTitle = document.createElement('h1');
    projectTitle.id = 'projectTitle';
    projectTitle.textContent = "Example Project";
    const projectTodos = document.createElement('div');
    projectTodos.id = 'projectTodos';
    const add_todo = document.createElement('button');
    add_todo.id = "add_todo_btn";
    add_todo.textContent = "Add Todo";
    projectBox.append(projectTitle, add_todo, projectTodos);    
    document.body.appendChild(projectBox);
    addTodo({});    
}
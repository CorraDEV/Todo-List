import renderTodo from "./renderTodo";

export default function renderProject(){
    const projectBox = document.createElement('div');
    projectBox.id = 'projectBox'; 
    const projectTitle = document.createElement('h1');
    projectTitle.id = 'projectTitle';
    projectTitle.textContent = "Example Project";
    const projectTodos = document.createElement('div');
    projectTodos.id = 'projectTodos';
    projectBox.append(projectTitle, projectTodos);    
    document.body.appendChild(projectBox);
    renderTodo({});
}
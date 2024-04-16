import "./css/style.css";
import renderPage from "./js/renderPage.js";
import Project from "./js/Project.js";
import TodoList from "./js/TodoList.js";
import Todo from "./js/todo.js";

renderPage();
const sidebar = document.querySelector("#sidebar");
sidebar.addEventListener("click", function(evt){
    if(evt.target.id == 'add_project_btn'){
        TodoList.addProject();
        TodoList.editProject(evt.target.previousElementSibling);                
    }    
    else if(evt.target.classList.contains('bin')){
        evt.target.parentNode.remove();
    }
    else if(evt.target.classList.contains('pencil')){
        TodoList.editProject(evt.target.parentNode);
    }
    else if(evt.target.classList.contains('editProjectName')){
        TodoList.applyEditProject(evt.target.parentNode);
    }
});

const project_box = document.querySelector("#projectBox");
project_box.addEventListener("click", function(evt){

    console.log(TodoList.projects);

    if(evt.target.id == 'add_todo_btn'){        
        Project.addTodo({});        
        Project.editTodo(evt.target.nextElementSibling.lastChild);
    }
    else if(evt.target.classList.contains('bin')){
        evt.target.parentNode.remove();
    }
    else if(evt.target.classList.contains('pencil')){
        Project.editTodo(evt.target.parentNode);
    }
    else if(evt.target.classList.contains('editTodo')){
        Project.applyEditTodo(evt.target.parentNode);
    }
});

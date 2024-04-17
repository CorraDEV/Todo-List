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
        const button = evt.target.parentNode.previousElementSibling.querySelector('.editProjectName');
        button.dataset.editOnly = 'Yes';
    }
    else if(evt.target.classList.contains('editProjectName')){        
        if(evt.target.dataset.editOnly == 'Yes'){
            TodoList.applyEditProject(evt.target.parentNode);    
        }
        else{
            const project = evt.target.parentNode.nextElementSibling;
            TodoList.applyEditProject(evt.target.parentNode);            
            TodoList.changeProject(project);
        }                                
    }
    else if(evt.target.classList.contains('project') || evt.target.classList.contains('projectName')){
        if(evt.target.classList.contains('project')){
            TodoList.changeProject(evt.target);
        }
        else{
            TodoList.changeProject(evt.target.parentNode);
        }        
    }
});

const project_box = document.querySelector("#projectBox");
project_box.addEventListener("click", function(evt){    
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

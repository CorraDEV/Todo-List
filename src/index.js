import "./css/style.css";
import renderPage from "./js/renderPage.js";
import addProject from "./js/addProject.js";
import addTodo from "./js/addTodo.js";
import editProject from "./js/editProject.js";
import applyEditProject from "./js/applyEditProject.js";
import editTodo from "./js/editTodo.js";
import applyEditTodo from "./js/applyEditTodo.js";

renderPage();
const sidebar = document.querySelector("#sidebar");
sidebar.addEventListener("click", function(evt){
    if(evt.target.id == 'add_project_btn'){
        addProject();
        editProject(evt.target.previousElementSibling);                
    }    
    else if(evt.target.classList.contains('bin')){
        evt.target.parentNode.remove();
    }
    else if(evt.target.classList.contains('pencil')){
        editProject(evt.target.parentNode);
    }
    else if(evt.target.classList.contains('editProjectName')){
        applyEditProject(evt.target.parentNode);
    }
});
const project_box = document.querySelector("#projectBox");
project_box.addEventListener("click", function(evt){
    if(evt.target.id == 'add_todo_btn'){        
        addTodo({});        
        editTodo(evt.target.nextElementSibling.lastChild);
    }
    else if(evt.target.classList.contains('bin')){
        evt.target.parentNode.remove();
    }
    else if(evt.target.classList.contains('pencil')){
        editTodo(evt.target.parentNode);
    }
    else if(evt.target.classList.contains('editTodo')){
        applyEditTodo(evt.target.parentNode);
    }
});

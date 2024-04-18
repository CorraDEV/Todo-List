import "./css/style.css";
import renderPage from "./js/renderPage.js";
import Project from "./js/Project.js";
import TodoList from "./js/TodoList.js";

renderPage();
const sidebar = document.querySelector("#sidebar");
sidebar.addEventListener("click", function(evt){
    if(evt.target.id == 'add_project_btn'){
        TodoList.addProject();
        TodoList.editProject(evt.target.previousElementSibling);
    }    
    else if(evt.target.classList.contains('bin')){
        const projectSidebarID = evt.target.parentNode.id;        
        let previousProjectSidebar = undefined;
        
        if(projectSidebarID > 0){
            previousProjectSidebar = evt.target.parentNode.previousElementSibling;        
        }               
        const nextProjectSidebar = evt.target.parentNode.nextElementSibling;
        TodoList.deleteProject(evt.target.parentNode);                                        
        
        if(nextProjectSidebar.id != 'add_project_btn'){
            nextProjectSidebar.id = nextProjectSidebar.id - 1;
            let ele = nextProjectSidebar;
            do{            
                ele = ele.nextElementSibling; 
                if(ele.id != 'add_project_btn'){
                    ele.id = ele.id - 1; 
                }            
            }
            while(ele.id != 'add_project_btn');                    
        }                                                
        
        if(TodoList.projects.length >= 1){
            if(previousProjectSidebar){
                TodoList.changeProject(previousProjectSidebar);        
            }
            else{
                TodoList.changeProject(nextProjectSidebar);        
            }
        }        
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
            const nextProject = evt.target.parentNode.nextElementSibling;
            TodoList.applyEditProject(evt.target.parentNode);            
            TodoList.changeProject(nextProject);
            Project.addTodo({});
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
        Project.deleteTodo(evt.target.parentNode);              
    }
    else if(evt.target.classList.contains('pencil')){
        Project.editTodo(evt.target.parentNode);
    }
    else if(evt.target.classList.contains('editTodo')){
        Project.applyEditTodo(evt.target.parentNode);
    }
});

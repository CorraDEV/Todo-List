import "./css/style.css";
import renderPage from "./js/renderPage.js";
import recoverPage from "./js/recoverPage.js";
import Project from "./js/Project.js";
import TodoList from "./js/TodoList.js";
import Todo from "./js/todo.js";

if(localStorage.getItem("projects")){
    recoverPage();    
}
else{
    renderPage();
}

const sidebar = document.querySelector("#sidebar");
sidebar.addEventListener("click", function(evt){            
    if(evt.target.id == 'add_project_btn'){                        
        TodoList.projects.push(new Project());
        TodoList.renderSidebarProject(new Project());                        
        TodoList.editProject(evt.target.previousElementSibling);                                
    }    
    else if(evt.target.classList.contains('bin')){
        const projectSidebarID = evt.target.parentNode.id;        
        let previousProjectSidebar = null;
        
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
        
        if(TodoList.projects.length > 0){
            if(previousProjectSidebar){
                TodoList.moveToProject(previousProjectSidebar);        
            }
            else{
                TodoList.moveToProject(nextProjectSidebar);        
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
            TodoList.moveToProject(nextProject);                        
            TodoList.projects[nextProject.id].todos.push(new Todo());
            Project.renderTodo(new Todo());
        }        
    }
    else if(evt.target.classList.contains('project') || evt.target.classList.contains('projectName')){
        if(evt.target.classList.contains('project')){
            TodoList.moveToProject(evt.target);
        }
        else{
            TodoList.moveToProject(evt.target.parentNode);
        }          
    }
    
    let currentProjectID = document.querySelector('#projectTodos').getAttribute('data-projectid'); 
    localStorage.setItem('projects', JSON.stringify(TodoList.projects));
    localStorage.setItem('currentProjectID', currentProjectID);
});

const project_box = document.querySelector("#projectBox");
project_box.addEventListener("click", function(evt){        
    if(evt.target.id == 'add_todo_btn'){                             
        const projectID = projectTodos.getAttribute('data-projectid');                
        TodoList.projects[projectID].todos.push(new Todo());        
        Project.renderTodo(new Todo());        
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
    else if(evt.target.classList.contains('todoCheck')){
        Project.checkTodo(evt.target.parentNode);        
    }

    localStorage.setItem('projects', JSON.stringify(TodoList.projects));    
});
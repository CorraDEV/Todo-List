import renderSidebar from "./renderSidebar.js";
import renderProjectSection from "./renderProjectSection.js";
import TodoList from "./TodoList.js";
import Project from "./Project.js";

export default function recoverPage(){
    renderSidebar(); 
    const projects = JSON.parse(localStorage.getItem("projects"));                
    for(const project of projects){
        console.log(project);
        TodoList.projects.push(project);
        TodoList.renderSidebarProject(project);
    }          
    const currentProjectID = localStorage.getItem("currentProjectID");             
    const currentProject = projects[currentProjectID];    
    if(projects.length > 0){
        renderProjectSection(currentProject);        
        const projectTodos = document.querySelector("#projectTodos");        
        projectTodos.dataset.projectid = currentProjectID;        
        const todos = currentProject.todos;        
        for(const todo of todos){                
            Project.renderTodo(todo);            
        }
    }
    else{
        renderProjectSection(new Project());
        const projectBox = document.querySelector("#projectBox");
        projectBox.style.display = 'none';        
    }        
}
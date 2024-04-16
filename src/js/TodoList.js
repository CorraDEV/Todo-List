import Project from './Project';
import first_src from '../img/bin.png';
import second_src from '../img/pencil.png';

export default class TodoList{
    static projects = [];        

    static renderProject(){
        const projectBox = document.createElement('div');
        projectBox.id = 'projectBox';         
        const projectTitle = document.createElement('h1');
        projectTitle.id = 'projectTitle';
        projectTitle.textContent = "Example Project";
        const projectTodos = document.createElement('div');
        projectTodos.id = 'projectTodos';
        projectTodos.dataset.projectid = this.projects.length - 1;        
        const add_todo = document.createElement('button');
        add_todo.id = "add_todo_btn";
        add_todo.textContent = "Add Todo";
        projectBox.append(projectTitle, add_todo, projectTodos);    
        document.body.appendChild(projectBox);        
        Project.addTodo({});    
    }

    static addProject(){
        const project = document.createElement('div');
        project.classList.add('project');
        const project_id = this.projects.length;
        project.id = project_id;        
        const project_name = document.createElement('span');
        project_name.textContent = 'titolo progetto';
        project_name.classList.add('projectName');
        const first_icon = document.createElement('img');
        first_icon.classList.add('projectIcon', 'bin');
        first_icon.src = first_src;
        const second_icon = document.createElement('img');
        second_icon.classList.add('projectIcon', 'pencil');
        second_icon.src = second_src;
        const add_project = document.querySelector('#add_project_btn');
        add_project.parentNode.insertBefore(project, add_project);
        project.append(project_name, first_icon, second_icon);
        const projectObj = new Project(project_name.textContent);        
        this.projects.push(projectObj);        
    }
    
    static editProject(project){
        project.style.display = 'none';    
        const projectEdit = document.createElement('div');
        projectEdit.classList.add('projectEdit');
        const projectEditTitle = document.createElement('input');
        projectEditTitle.classList.add('projectEditName');
        projectEditTitle.type = 'text';
        const projectTitle = project.querySelector('.projectName');
        projectEditTitle.value = projectTitle.textContent;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('editProjectName');
        projectEdit.append(projectEditTitle, editButton);
        project.parentNode.insertBefore(projectEdit, project);
    }
    
    static applyEditProject(projectEdit){            
        const project = projectEdit.nextElementSibling;          
        const projectName = project.querySelector('.projectName');          
        const projectEditName = projectEdit.querySelector('.projectEditName');          
        projectName.textContent = projectEditName.value;        
        project.style.display = 'block';
        projectEdit.remove();
        const project_id = project.id;
        this.projects[project_id].title = projectName.textContent;
    }
    
    static changeProject(project){
        
    }
}
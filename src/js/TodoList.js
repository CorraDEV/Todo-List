import first_src from '../img/bin.png';
import second_src from '../img/pencil.png';

export default class TodoList{
    static projects = [];                

    static deleteProject(project){        
        const projectTodos = document.querySelector('#projectTodos');
        this.projects.splice(project.id, 1);                
        project.remove(); 
        projectTodos.innerHTML = '';        
    }

    static renderSidebarProject({title}){        
        const project = document.createElement('div');
        project.classList.add('project');
        project.id = this.projects.length - 1;         
        const project_name = document.createElement('span');
        project_name.textContent = title;
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
        this.projects[project.id].title = projectName.textContent;
        const projectTitle = document.querySelector('#projectBox > #projectTitle');         
        projectTitle.textContent = this.projects[project.id].title;        
    }
    
    static changeProject(project){                                
        const projectTodos = document.querySelector('#projectTodos');
        projectTodos.dataset.projectid = project.id;  
        projectTodos.innerHTML = "";
        const projectTitle = document.querySelector('#projectBox > #projectTitle');         
        projectTitle.textContent = this.projects[projectTodos.dataset.projectid].title;        
        const todos = this.projects[projectTodos.dataset.projectid].todos;
        let todoIndex = 0;
        for(const todo of todos){
            const todoBox = document.createElement('div');
            todoBox.classList.add('todoBox');                                        
            todoBox.id = todoIndex;            
            const todoTitle = document.createElement('h3');
            todoTitle.textContent = todo.title;    
            todoTitle.classList.add('todoTitle');        
            const first_icon = document.createElement('img');
            first_icon.classList.add('projectIcon', 'bin');
            first_icon.src = first_src;
            const second_icon = document.createElement('img');
            second_icon.classList.add('projectIcon', 'pencil');
            second_icon.src = second_src;
            const todoDesc = document.createElement('p');
            todoDesc.classList.add('todoDesc');
            todoDesc.textContent = todo.desc;
            const todoDate = document.createElement('span');
            todoDate.classList.add('todoDate');    
            todoDate.textContent = todo.due_date;            
            const todoCheck = document.createElement('input');                    
            todoCheck.type = 'checkbox';
            todoCheck.classList.add('todoCheck');            
            if(todo.check == false){
                todoCheck.checked = false;
            }
            else{
                todoCheck.checked = true;
            }
            todoBox.append(todoTitle, first_icon, second_icon, todoDesc, todoDate, todoCheck);        
            projectTodos.appendChild(todoBox);                
            todoIndex++;
        }       
    }
}
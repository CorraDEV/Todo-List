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
        console.log(this.projects);
        const projectTodos = document.querySelector('#projectTodos');
        projectTodos.dataset.projectid = project.id;  
        projectTodos.innerHTML = "";
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
            const todoCheck = document.createElement('span');                    
            todoCheck.classList.add('todoCheck');    
            todoCheck.textContent = todo.check;   
            todoBox.append(todoTitle, first_icon, second_icon, todoDesc, todoDate, todoCheck);        
            projectTodos.appendChild(todoBox);                
            todoIndex++;
        }       
    }
}
import first_src from '../img/bin.png';
import second_src from '../img/pencil.png';
import editProject from './editProject';

export default function addProject(){    
    const project = document.createElement('div');
    project.classList.add('project');
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
}
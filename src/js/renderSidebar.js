import first_src from '../img/bin.png';
import second_src from '../img/pencil.png';

export default function renderSidebar(){
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    const sidebar_title = document.createElement('h2');
    sidebar_title.id = 'sidebarTitle';
    sidebar_title.textContent = 'Projects';
    const project = document.createElement('div');
    project.classList.add('project');
    const project_name = document.createElement('span');
    project_name.textContent = 'titolo progetto';
    project_name.classList.add('projectName');
    const first_icon = document.createElement('img');
    first_icon.classList.add('projectIcon');
    first_icon.src = first_src;
    const second_icon = document.createElement('img');
    second_icon.classList.add('projectIcon');
    second_icon.src = second_src;
    const add_project = document.createElement('button');
    add_project.id = "add_project_btn";
    add_project.textContent = "Add Project";
    sidebar.append(sidebar_title, project, add_project);
    project.append(project_name, first_icon, second_icon);
    document.body.append(sidebar);
}
import TodoList from "./TodoList";

export default function renderSidebar(){
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    const sidebar_title = document.createElement('h2');
    sidebar_title.id = 'sidebarTitle';
    sidebar_title.textContent = 'Projects';    
    const add_project = document.createElement('button');
    add_project.id = "add_project_btn";
    add_project.textContent = "Add Project";
    sidebar.append(sidebar_title, add_project);    
    document.body.append(sidebar);
    TodoList.addProject();
}
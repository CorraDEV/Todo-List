import renderSidebar from "./renderSidebar.js";
import renderProjectSection from "./renderProjectSection.js";
import TodoList from "./TodoList.js";
import Project from "./Project.js";
import Todo from "./todo.js";

export default function renderPage(){
    renderSidebar();            
    TodoList.projects.push(new Project());
    TodoList.renderSidebarProject(new Project());
    renderProjectSection(new Project());
    TodoList.projects[0].todos.push(new Todo());
    Project.renderTodo(new Todo());            
}
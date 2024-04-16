import renderSidebar from "./renderSidebar.js";
import TodoList from "./TodoList.js";

export default function renderPage(){
    renderSidebar();
    TodoList.renderProject({});
}
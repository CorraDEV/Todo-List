export default function editProject(project){
    project.style.display = 'none';    
    const projectEdit = document.createElement('div');
    projectEdit.classList.add('projectEdit');
    const projectEditTitle = document.createElement('input');
    projectEditTitle.classList.add('projectEditName');
    projectEditTitle.type = 'text';
    projectEditTitle.value = project.textContent;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('editProjectName');
    projectEdit.append(projectEditTitle, editButton);
    project.parentNode.insertBefore(projectEdit, project);
}
export default function editProject(project){
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
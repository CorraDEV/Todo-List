export default function applyEditProject(projectEdit){            
    const project = projectEdit.nextElementSibling;  
    const projectName = project.querySelector('.projectName');          
    const projectEditName = projectEdit.querySelector('.projectEditName');          
    projectName.textContent = projectEditName.value;        
    project.style.display = 'block';
    projectEdit.remove(); 
}
import "./styles.css";
import { projects } from "./data.js";
import { loadProjects, generateTaskPopup, appendToBody } from "./dom.js";

function InitializeProjects() {
    const projContainer = document.createElement("div");
    projContainer.classList.add("projContainer");
    // Add project section
    const addProjSect = document.createElement("div");
    addProjSect.classList.add("projSect1");

    const addProjSectTitle = document.createElement("h1");
    addProjSectTitle.innerHTML = "Projects"

    const addProjAction = document.createElement("div");
    addProjAction.classList.add("addProj");
    addProjAction.innerHTML = "+";
    // add project button
    addProjAction.addEventListener("click", () => {
        let projName;
        do {
            projName = prompt("Enter project name : ");
        } while (Object.keys(projects).includes(projName) || projName === '');
        
        if (projName === null) {
            return false;
        }
        projects[projName] = [];
        loadProjects(projList);
    })
    // Append (addProjSect) children
    addProjSect.appendChild(addProjSectTitle);
    addProjSect.appendChild(addProjAction);

    // Show projects
    const projList = document.createElement("div");
    loadProjects(projList);
    // Append to projContainer
    projContainer.appendChild(addProjSect);
    projContainer.appendChild(projList);
    // Append to body
    document.querySelector("body").appendChild(projContainer);
}
function InitializeTasks(projName, projTasks) {
    // Tasks Container
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasksContainer");

    // Title
    const projTitle = document.createElement("div");
    projTitle.classList.add("projTitle");

    // List of tasks
    const tasks = document.createElement("div");
    tasks.classList.add("tasks");

    // Add task action
    const addTask = document.createElement("div");
    addTask.classList.add("addTask");
    addTask.innerHTML = "Add Task";
    // TODO: add task action

    // Append everything
    tasksContainer.appendChild(projTitle);
    tasksContainer.appendChild(tasks);
    tasksContainer.appendChild(addTask);

    // Append to body
    appendToBody(tasksContainer);
}
InitializeProjects()
generateTaskPopup();
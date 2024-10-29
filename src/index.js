import "./styles.css";
import { projects } from "./data.js";
import { generateProject, loadProjects } from "./dom.js";

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
    // TODO: add action to this + ==> Make it add project
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
InitializeProjects()
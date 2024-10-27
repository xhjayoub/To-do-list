import "./styles.css";

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
    // Append (addProjSect) children
    addProjSect.appendChild(addProjSectTitle);
    addProjSect.appendChild(addProjAction);

    // Append to projContainer
    projContainer.appendChild(addProjSect);
    // Append to body
    document.querySelector("body").appendChild(projContainer);
}
InitializeProjects()
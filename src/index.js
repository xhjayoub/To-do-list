import { DOM } from "./dom.js";
import { generateProjects } from "./generate.js";
import "./styles.css";
import { dialogContainer } from "./elements.js";
function InitializeMainSide() {
    // Main side
    const mainSide = new DOM("div");
    mainSide.addClass("mainSide");

    // Main header
    const mainHeader = new DOM("div");
    mainHeader.addClass("mainHeader");
    const mainTitle = new DOM("div", "My Projects", "mainTitle");
    const addProject = new DOM("div", "+", "addProject");
    addProject.element.addEventListener("click", () => {
        let c = document.querySelector("#addProj-dialog");
        if (!c.open) {
            c.open = true;
        }
    })

    mainHeader.appendChilds(mainTitle.element, addProject.element);
    // Projects
    const projects = new DOM("div");
    projects.addClass("projects");
    const defaultProjects = ["Home", "Workout", "Hobbies"];
    generateProjects(defaultProjects, projects);

    mainSide.appendChilds(mainHeader.element, projects.element);
    mainSide.appendThisToBody();
}

function InitializeTaskSide() {
    // Tasks side
    const taskSide = new DOM("div");
    taskSide.addClass("taskSide");

    taskSide.appendThisToBody();

    dialogContainer.appendThisToBody();
}


function InitializeApp() {
    InitializeMainSide();
    InitializeTaskSide();
}

InitializeApp();
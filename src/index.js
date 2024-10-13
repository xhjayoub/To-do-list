import { DOM } from "./dom.js";
import { generateProj } from "./generate.js";
// Main side
const mainSide = new DOM("div");
mainSide.addClass("mainSide");

// Main header
const mainHeader = new DOM("div");
mainHeader.addClass("mainHeader");
const mainTitle = new DOM("div","My Projects", "mainTitle");
const addProject = new DOM("div","+","addProject");

mainHeader.appendChilds(mainTitle.element, addProject.element);
// Projects
const projects = new DOM("div");
projects.addClass("projects");
const defaultProjects = ["Home","Workout","Hobbies"];
for (let i = 0; i < defaultProjects.length; i++) {
    projects.appendChilds(generateProj(defaultProjects[i]).element);
}

mainSide.appendChilds(mainHeader.element, projects.element);
mainSide.appendThisToBody();


// Tasks side
const taskSide = new DOM("div");
taskSide.addClass("taskSide");

taskSide.appendThisToBody();
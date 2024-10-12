import { DOM } from "./dom.js";

// Main side
const mainSide = new DOM("div");
mainSide.addClass("mainSide");

// Main header
const mainHeader = new DOM("div");
mainHeader.addClass("mainHeader");
const mainTitle = new DOM("div","My Projects", "mainTitle");
const addProject = new DOM("div","+","addProject");

mainHeader.appendChilds(mainTitle.element, addProject.element);

mainSide.appendChilds(mainHeader.element);
mainSide.appendThisToBody();


// Tasks side
const taskSide = new DOM("div");
taskSide.addClass("taskSide");

taskSide.appendThisToBody();
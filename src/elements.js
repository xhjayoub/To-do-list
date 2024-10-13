import { DOM } from "./dom.js";
export { projDialog };
import { generateProj } from "./generate.js";

// Add project Dialog
const projDialog = new DOM("dialog");
projDialog.element.id = "addProj-dialog";

const projName = new DOM("div");
let name = new DOM("label","Project name : ");
let nameInp = new DOM("input");
nameInp.element.type = "text";
nameInp.element.required = true;
nameInp.addClass("Proj-name-inp");

projName.appendChilds(name.element, nameInp.element);


const Btns = new DOM("div");
Btns.addClass("addProj-dialog-btns");
const cancelBtn = new DOM("button", "Cancel");
cancelBtn.element.addEventListener("click", () => {
    let e = document.querySelector(".Proj-name-inp");
    e.value = "";
    projDialog.element.open = false;
})
const addProjBtn = new DOM("button", "Add");
addProjBtn.element.type = "submit";
addProjBtn.element.addEventListener("click", () => {
    let e = document.querySelector(".Proj-name-inp");
    if (e.value === "") {
        alert("Type project name.");
        return false;
    }
    projDialog.element.open = false;
    let proj = generateProj(e.value);
    document.querySelector(".projects").appendChild(proj.element);
    // Clean dialog
    e.value = "";
    // TODO: add logic to add project 
})

Btns.appendChilds(cancelBtn.element, addProjBtn.element);

projDialog.appendChilds(projName.element, Btns.element);
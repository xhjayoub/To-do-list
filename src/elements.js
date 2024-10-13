import { DOM } from "./dom.js";
export { projDialog };

// Add project Dialog
const projDialog = new DOM("dialog");
projDialog.element.id = "addProj-dialog";

const projName = new DOM("div");
let name = new DOM("label","Project name : ");
let nameInp = new DOM("input");
nameInp.element.type = "text";
nameInp.addClass("Proj-name-inp");

projName.appendChilds(name.element, nameInp.element);


const Btns = new DOM("div");
Btns.addClass("addProj-dialog-btns");
const cancelBtn = new DOM("button", "Cancel");
const addProjBtn = new DOM("button", "Add");

Btns.appendChilds(cancelBtn.element, addProjBtn.element);

projDialog.appendChilds(projName.element, Btns.element);
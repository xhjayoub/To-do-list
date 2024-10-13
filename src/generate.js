import { DOM } from "./dom.js";
export { generateProj }; 

function generateProj(ch) {
    const proj = new DOM("div");
    proj.addClass("proj");

    const projName = new DOM("div", "# " + ch);

    const editProj = new DOM("div", "...");

    proj.appendChilds(projName.element, editProj.element);

    return proj;
}

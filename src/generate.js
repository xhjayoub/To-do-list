import { DOM } from "./dom.js";
export { generateProjects }; 

function generateProj(ch) {
    const proj = new DOM("div");
    proj.addClass("proj");

    const projName = new DOM("div", "# " + ch);

    const editProj = new DOM("div", "...");

    proj.appendChilds(projName.element, editProj.element);

    return proj;
}
function generateProjects(arr, projects) {
    for (let i = 0; i < arr.length; i++) {
        projects.appendChilds(generateProj(arr[i]).element);
    }
}
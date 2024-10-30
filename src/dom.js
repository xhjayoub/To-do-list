import { projects } from "./data.js";
import threeDots from "./assets/three-dots-vertical-svgrepo-com.png"
export { loadProjects, generateTask };

function generateProject(projName) {
    const proj = document.createElement("div");
    proj.classList.add("proj");

    const name = document.createElement("div");
    name.classList.add("projName");
    name.innerHTML = projName;
    // remove button
    const rm = document.createElement("div");
    rm.classList.add("rmProj");
    rm.innerHTML = "X";

    rm.addEventListener("click", (el) => {
        let projName = el.target.parentElement.firstChild.innerHTML;
        delete projects[projName];
        el.target.parentElement.remove();
    })
    // Append everything to proj
    proj.appendChild(name);
    proj.appendChild(rm);

    return proj;
}
function loadProjects(projList) {
    projList.innerHTML = "";
    Object.keys(projects).forEach(element => {
        projList.appendChild(generateProject(element));
    });
}
function generateTask(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    // Section 1
    const section1 = document.createElement("div");
    section1.classList.add("taskSect1");

    const checkButton = document.createElement("input");
    checkButton.setAttribute("type","checkbox");
    // TODO: Add checkButton action (done and undone the task)

    const taskName = document.createElement("div");
    taskName.classList.add("taskName");
    taskName.innerHTML = task.name;

    // edit task
    const edit = document.createElement("img");
    edit.classList.add("edit");
    console.log(threeDots);
    edit.setAttribute("src", threeDots)
    
    // TODO: Add edit action
    // Append section 1
    section1.appendChild(checkButton);
    section1.appendChild(taskName);
    section1.appendChild(edit);

    // Section 2 
    const section2 = document.createElement("div");
    section2.classList.add("taskSect2");

    const dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");
    dueDate.innerHTML = task.dueDate;

    // Append section 2
    section2.appendChild(dueDate);

    // Append to taskContainer
    taskContainer.appendChild(section1);
    taskContainer.appendChild(section2);

    return taskContainer;
}
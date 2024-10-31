import { projects } from "./data.js";
import threeDots from "./assets/three-dots-vertical-svgrepo-com.png"
export { loadProjects, generateTask, generateTaskPopup };

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
function generateTaskPopup() {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    const title = document.createElement("h2");
    title.innerHTML = "New Task";

    // Task name
    const taskName = document.createElement("div");
    const taskNameLabel = document.createElement("label");
    taskNameLabel.innerHTML = "What is to be done?";
    taskNameLabel.setAttribute("for","taskNameInp");
    const taskNameInp = document.createElement("input");
    taskNameInp.setAttribute("type","text");
    taskNameInp.setAttribute("id","taskNameInp");

    taskName.appendChild(taskNameLabel);
    taskName.appendChild(taskNameInp);

    // Description
    const description = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.innerHTML = "Description (optional)";
    descriptionLabel.setAttribute("for","descriptionInp");
    const descriptionInp = document.createElement("input");
    descriptionInp.setAttribute("type","text");
    descriptionInp.setAttribute("id","descriptionInp");

    description.appendChild(descriptionLabel);
    description.appendChild(descriptionInp);

    // Periority
    const Periority = document.createElement("div");
    const PeriorityLabel = document.createElement("label");
    PeriorityLabel.innerHTML = "Periority";
    const PeriorityList = document.createElement("select");
    // TODO: Add periority list options

    Periority.appendChild(PeriorityLabel);
    Periority.appendChild(PeriorityList);

    // Due Date
    const dueDate = document.createElement("div");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.innerHTML = "Due Date";
    const dueDateInp = document.createElement("input");
    dueDateInp.setAttribute("type","date");
    
    dueDate.appendChild(dueDateLabel);
    dueDate.appendChild(dueDateInp);

    // Buttons
    const btnCont = document.createElement("div");
    const cancel = document.createElement("button");
    cancel.innerHTML = "Cancel";
    // TODO: add cancel action

    const createBtn = document.createElement("button");
    createBtn.innerHTML = "Create";
    // TODO: add create action

    btnCont.appendChild(cancel);
    btnCont.appendChild(createBtn);

    // Append to popup
    popup.appendChild(title);
    popup.appendChild(taskName);
    popup.appendChild(description);
    popup.appendChild(Periority);
    popup.appendChild(dueDate);
    popup.appendChild(btnCont);
    document.querySelector("body").appendChild(popup);

}
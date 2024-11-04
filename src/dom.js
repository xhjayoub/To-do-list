import { projects, Task, proj } from "./data.js";
import threeDots from "./assets/three-dots-vertical-svgrepo-com.png"
export { loadProjects, generateTask, generateTaskPopup, appendToBody, loadTasks };

function addTask(selectedProj, taskName, description, dueDate, priority) {
    const newTask = new Task(taskName,description,dueDate,priority);
    projects[selectedProj].push(newTask);
}
function loadTasks(projName) {
    document.querySelector(".projTitle").innerHTML = projName;
    let tasksCont = document.querySelector(".tasks");
    tasksCont.innerHTML = "";
    projects[projName].forEach((task) => {
        tasksCont.append(generateTask(task));
    })
}
function appendToBody(node) {
    document.querySelector("body").append(node);
}
function generateProject(projName) {
    const proj = document.createElement("div");
    proj.classList.add("proj");

    const name = document.createElement("div");
    name.classList.add("projName");
    name.innerHTML = projName;
    name.addEventListener("click", () => {
        proj.selectedProj = projName;
        loadTasks(proj.selectedProj);
    })
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
    proj.append(name,rm);

    return proj;
}
function loadProjects(projList) {
    projList.innerHTML = "";
    Object.keys(projects).forEach(element => {
        projList.append(generateProject(element));
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
    checkButton.addEventListener("click",() => {
        if (checkButton.checked) {
            task.makeItDone();
            taskContainer.classList.add("done");
        } else {
            task.makeItUndone();
            taskContainer.classList.remove("done");
        }
    })

    const taskName = document.createElement("div");
    taskName.classList.add("taskName");
    taskName.innerHTML = task.name;

    // edit task
    const edit = document.createElement("img");
    edit.classList.add("edit");
    edit.setAttribute("src", threeDots)
    
    // TODO: Add edit action
    // Append section 1
    section1.append(checkButton,taskName, edit);

    // Section 2 
    const section2 = document.createElement("div");
    section2.classList.add("taskSect2");

    const dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");
    if (task.dueDate === "") {
        dueDate.innerHTML = "No due date.";
    } else {
        dueDate.innerHTML = task.dueDate;
    }
    

    // Append section 2
    section2.append(dueDate);

    // Append to taskContainer
    taskContainer.append(section1, section2);
    if (task.done) {
        taskContainer.classList.add("done");
        checkButton.checked = true;
    }
    return taskContainer;
}
function generateTaskPopup() {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popupContainer");

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

    taskName.append(taskNameLabel, taskNameInp);

    // Description
    const description = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.innerHTML = "Description (optional)";
    descriptionLabel.setAttribute("for","descriptionInp");
    const descriptionInp = document.createElement("input");
    descriptionInp.setAttribute("type","text");
    descriptionInp.setAttribute("id","descriptionInp");

    description.append(descriptionLabel, descriptionInp);

    // Periority
    const Periority = document.createElement("div");
    const PeriorityLabel = document.createElement("label");
    PeriorityLabel.innerHTML = "Periority";
    const PeriorityList = document.createElement("select");
    const pList = ["Low","Medium", "High"];
    pList.forEach((element) => {
        const p = document.createElement("option");
        p.innerHTML = element;
        PeriorityList.append(p);
    });
    Periority.append(PeriorityLabel, PeriorityList);

    // Due Date
    const dueDate = document.createElement("div");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.innerHTML = "Due Date";
    const dueDateInp = document.createElement("input");
    dueDateInp.setAttribute("type","date");
    
    dueDate.append(dueDateLabel, dueDateInp);

    // Buttons
    const btnCont = document.createElement("div");
    const cancel = document.createElement("button");
    cancel.innerHTML = "Cancel";
    function clearTask() {
        taskNameInp.value = "";
        descriptionInp.value = "";
        PeriorityList.value = "Low";
        dueDateInp.value = "";
    }
    cancel.addEventListener("click", () => {
        clearTask();
        popupContainer.style.visibility = "hidden";
        document.querySelector("body").style.backgroundColor = "transparent";
    })

    const createBtn = document.createElement("button");
    createBtn.innerHTML = "Create";
    createBtn.addEventListener("click", () => {
        if (taskNameInp.value === "") {
            alert("Enter task name !");
            return false;
        }
        addTask(proj.selectedProj, taskNameInp.value,descriptionInp.value,dueDateInp.value,PeriorityList.value);
        popupContainer.style.visibility = "hidden";
        loadTasks(proj.selectedProj);
        clearTask();
        document.querySelector("body").style.backgroundColor = "transparent";
    })

    btnCont.append(cancel,createBtn);

    // Append to popup
    popup.append(title,taskName,description,Periority,dueDate,btnCont);
    popupContainer.append(popup);
    appendToBody(popupContainer);

}
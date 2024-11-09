import { projects, proj, Task , removeTask , editTask} from "./data.js";
import threeDots from "./assets/three-dots-vertical-svgrepo-com.png"
import { de } from "date-fns/locale";
export { loadTasks, generateTaskPopup, InitializeProjects, InitializeTasks, projAndTasks };

function addTask(selectedProj, taskName, description, dueDate, priority) {
    const newTask = new Task(taskName,description,dueDate,priority);
    projects[selectedProj].push(newTask);
}
function loadTasks(projName) {
    document.querySelector(".projTitle").innerHTML = projName;
    let tasksCont = document.querySelector(".tasks");
    tasksCont.innerHTML = "";
    if (projects[projName].length === 0) {
        const noProj = document.createElement("div");
        noProj.classList.add("noProj");
        noProj.innerHTML = "No tasks";
        tasksCont.append(noProj);
        return;
    }
    projects[projName].forEach((task) => {
        tasksCont.append(generateTask(task));
    })
}
function appendToBody(node) {
    document.querySelector("body").append(node);
}
function generateProject(projName) {
    const projContainer = document.createElement("div");
    projContainer.classList.add("proj");

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
    projContainer.append(name,rm);

    return projContainer;
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
    // Add periority class
    taskContainer.classList.add(task.priority);
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
    const editContainer = document.createElement("div");
    editContainer.classList.add("editContainer");

    const edit = document.createElement("img");
    edit.classList.add("edit");
    edit.setAttribute("src", threeDots)
    
    const editActions = document.createElement("div");
    editActions.classList.add("editActions");
    
    const changeTask = document.createElement("div");
    changeTask.classList.add("changeTask");
    changeTask.innerHTML = "Edit";
    changeTask.addEventListener("click", () => {
        console.log("Change task !");
        generateEditTaskPopup(task);
    })
    // TODO: add change task functionality

    const deleteTask = document.createElement("div");
    deleteTask.classList.add("deleteTask");
    deleteTask.innerHTML = "Delete";
    deleteTask.addEventListener("click", (e) => {
        taskContainer.remove();
        removeTask(proj.selectedProj, task.name);
        loadTasks(proj.selectedProj);
    })

    editActions.append(changeTask, deleteTask);
    editContainer.append(edit, editActions);
    // Append section 1
    section1.append(checkButton,taskName, editContainer);

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
    title.classList.add("popup-Title");
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
    PeriorityList.setAttribute("id", "priorityInp");
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
    dueDateInp.setAttribute("id", "dueDateInp");
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
    createBtn.classList.add("createBtn");
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

function projAndTasks(proj, tasks) {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todoContainer");

    todoContainer.append(proj, tasks);
    appendToBody(todoContainer);
}
function InitializeProjects() {
    const projContainer = document.createElement("div");
    projContainer.classList.add("projContainer");
    // Add project section
    const addProjSect = document.createElement("div");
    addProjSect.classList.add("projSect1");

    const addProjSectTitle = document.createElement("h1");
    addProjSectTitle.innerHTML = "Projects"

    const addProjAction = document.createElement("div");
    addProjAction.classList.add("addProj");
    addProjAction.innerHTML = "+";
    // add project button
    addProjAction.addEventListener("click", () => {
        let projName;
        do {
            projName = prompt("Enter project name : ");
        } while (Object.keys(projects).includes(projName) || projName === '');
        
        if (projName === null) {
            return false;
        }
        projects[projName] = [];
        loadProjects(projList);
    })
    // Append (addProjSect) children
    addProjSect.append(addProjSectTitle, addProjAction);

    // Show projects
    const projList = document.createElement("div");
    loadProjects(projList);
    // Append to projContainer
    projContainer.append(addProjSect,projList);

    return projContainer;
}
function InitializeTasks() {
    // Tasks Container
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasksContainer");

    // Title
    const projTitle = document.createElement("h1");
    projTitle.classList.add("projTitle");

    // List of tasks
    const tasks = document.createElement("div");
    tasks.classList.add("tasks");

    // Add task action
    const addTask = document.createElement("div");
    addTask.classList.add("addTask");
    addTask.innerHTML = "Add Task";
    addTask.addEventListener("click", () => {
        document.querySelector(".popupContainer").style.visibility = "visible";
        document.querySelector("#taskNameInp").focus();
        // TODO: define what task
    })

    // Append everything
    tasksContainer.append(projTitle, tasks, addTask);

    return tasksContainer;
}

function generateEditTaskPopup(task) {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("editPopupContainer");

    const popup = document.createElement("div");
    popup.classList.add("popup");

    const title = document.createElement("h2");
    title.classList.add("popup-Title");
    title.innerHTML = "Change Task";

    // Task name
    const taskName = document.createElement("div");
    const taskNameLabel = document.createElement("label");
    taskNameLabel.innerHTML = "What is to be done?";
    taskNameLabel.setAttribute("for","taskNameInp");
    const taskNameInp = document.createElement("input");
    taskNameInp.setAttribute("type","text");
    taskNameInp.setAttribute("id","taskNameInp");
    taskNameInp.value = task.name;

    taskName.append(taskNameLabel, taskNameInp);

    // Description
    const description = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.innerHTML = "Description (optional)";
    descriptionLabel.setAttribute("for","descriptionInp");
    const descriptionInp = document.createElement("input");
    descriptionInp.setAttribute("type","text");
    descriptionInp.setAttribute("id","descriptionInp");
    descriptionInp.value = task.description;
    description.append(descriptionLabel, descriptionInp);

    // Periority
    const Periority = document.createElement("div");
    const PeriorityLabel = document.createElement("label");
    PeriorityLabel.innerHTML = "Periority";
    const PeriorityList = document.createElement("select");
    PeriorityList.setAttribute("id", "priorityInp");
    const pList = ["Low","Medium", "High"];
    pList.forEach((element) => {
        const p = document.createElement("option");
        p.innerHTML = element;
        PeriorityList.append(p);
    });
    PeriorityList.value = task.priority;
    Periority.append(PeriorityLabel, PeriorityList);

    // Due Date
    const dueDate = document.createElement("div");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.innerHTML = "Due Date";
    const dueDateInp = document.createElement("input");
    dueDateInp.setAttribute("type","date");
    dueDateInp.setAttribute("id", "dueDateInp");
    dueDateInp.value = task.dueDate;
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
    createBtn.innerHTML = "Change";
    createBtn.classList.add("createBtn");
    createBtn.addEventListener("click", () => {
        if (taskNameInp.value === "") {
            alert("Enter task name !");
            return false;
        }
        editTask(proj.selectedProj,task.name, taskNameInp.value,descriptionInp.value,dueDateInp.value,PeriorityList.value);
        popupContainer.style.visibility = "hidden";
        loadTasks(proj.selectedProj);
        popupContainer.remove();
        document.querySelector("body").style.backgroundColor = "transparent";
    })

    btnCont.append(cancel,createBtn);

    // Append to popup
    popup.append(title,taskName,description,Periority,dueDate,btnCont);
    popupContainer.append(popup);
    appendToBody(popupContainer);

}

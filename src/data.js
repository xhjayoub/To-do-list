export { projects, proj, Task, removeTask, editTask, updateLocalStorage };

class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = false;
    } 
    makeItDone() {
        updateLocalStorage(projects);
        this.done = true;
    }
    makeItUndone() {
        updateLocalStorage(projects);
        this.done = false
    }
}

if (localStorage.getItem("projects") !== null && Object.keys(JSON.parse(localStorage.getItem("projects"))).length !== 0) {
    var projects = JSON.parse(localStorage.getItem("projects"));
} else {
    var projects = {
        Home:[],
        Work:[],
        Fitness:[]
    }
}
function removeTask(selectedProj,taskName) {
    for (let i = 0; i < projects[selectedProj].length; i++) {
        if (projects[selectedProj][i].name === taskName) {
            projects[selectedProj].splice(i, 1);
            break;
        }
    }
    updateLocalStorage(projects);
}
function editTask(selectedProj,oldTaskName, taskName, description, dueDate, priority) {
    for (let i = 0; i < projects[selectedProj].length; i++) {
        if (projects[selectedProj][i].name === oldTaskName) {
            projects[selectedProj][i].name = taskName;
            projects[selectedProj][i].description = description;
            projects[selectedProj][i].dueDate = dueDate;
            projects[selectedProj][i].priority = priority;
            break;
        }
    }
    updateLocalStorage(projects);
}
let proj = {
    selected: Object.keys(projects)[0],
    get selectedProj() {
        return this.selected;
    },
    set selectedProj(projName) {
        this.selected = projName;
    }
}
function updateLocalStorage(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}
updateLocalStorage(projects);
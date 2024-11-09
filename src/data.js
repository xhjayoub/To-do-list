export { projects, proj, Task, removeTask, editTask };

class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.makeItUndone();
    } 
    makeItDone() {
        this.done = true;
    }
    makeItUndone() {
        this.done = false
    }
}

let projects = {
    Home:[],
    Work:[],
    Fitness:[]
}
function removeTask(selectedProj,taskName) {
    for (let i = 0; i < projects[selectedProj].length; i++) {
        if (projects[selectedProj][i].name === taskName) {
            projects[selectedProj].splice(i, 1);
            break;
        }
    }
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
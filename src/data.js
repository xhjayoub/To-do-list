export { projects, selectedProj, Task };

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
    Home:[new Task("Clean the house","","","Low"), new Task("go out","to the beach","12-10-2022","Low")],
    Work:[],
    Fitness:[]
}
let selectedProj = Object.keys(projects)[0];
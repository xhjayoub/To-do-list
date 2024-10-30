export { projects };

class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.undone();
    } 
    done() {
        this.done = true;
    }
    undone() {
        this.done = false
    }
}

let projects = {
    Home:[],
    Work:[],
    Fitness:[]
}
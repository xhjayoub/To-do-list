export { projects };

class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    } 
}

let projects = {
    Home:[],
    Work:[],
    Fitness:[]
}
import "./styles.css";
import { proj } from "./data.js";
import { loadTasks, generateTaskPopup, InitializeProjects, InitializeTasks, projAndTasks } from "./dom.js";


projAndTasks(InitializeProjects(), InitializeTasks());
generateTaskPopup();
loadTasks(proj.selectedProj);
// index.js
import "./styles.css";
import  { DOM } from "./dom.js";

// Load MainSide
const mainSide = DOM.makeElement("div");
DOM.addClass(mainSide, "mainSide");

// Load TaskSide
const taskSide = DOM.makeElement("div");
DOM.addClass(taskSide,"taskSide");


DOM.appendElement(mainSide,"body");
DOM.appendElement(taskSide,"body");
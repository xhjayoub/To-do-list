export { DOM };

// Class For gen DOM
class DOM {
    static makeElement(element) {
        return document.createElement(element);
    }
    static addClass(element,className) {
        element.classList.add(className);
    }
    static removeClass(element, className) {
        element.classList.remove(className);
    }
}
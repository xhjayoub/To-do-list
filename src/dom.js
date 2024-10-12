export { DOMgen };

// Class For gen DOM
class DOMgen {
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
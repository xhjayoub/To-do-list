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
    static appendElement(element, selector) {
        document.querySelector(selector).appendChild(element);
    }
    static appendMultipleElements(arr, selector) {
        for (let i = 0; i < arr.length ; i++) {
            this.appendElement(arr[i],selector);
        }
    }
}
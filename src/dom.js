export { DOM };

class DOM {
    constructor(element, text, id) {
        this.element = document.createElement(element);
        if (text !== undefined) {
            this.element.innerHTML = text;
        } 
        if (id !== undefined) {
            this.element.id = id;
        }
    }
    appendChilds() {
        for (let i = 0; i<arguments.length; i++) {
            this.element.appendChild(arguments[i]);
        }
    }
    addClass() {
        for (let i = 0; i<arguments.length; i++) {
            this.element.classList.add(arguments[i]);
        }
    }
    appendThisToBody() {
        document.querySelector("body").appendChild(this.element);
    }
}
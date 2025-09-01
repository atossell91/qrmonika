class modal {
    constructor(app) {
        this.app = app;
        this.ModalElem = document.getElementById("info-modal");
        this.ModalCloseButton = document.getElementById("modal-close-button");

        this.ModalCloseButton.addEventListener("click", ()=>{ this.hide(); });
    }

    show() {
        this.ModalElem.style.display = "block";
    }

    hide() {
        this.ModalElem.style.display = "none";
    }
}

export { modal };
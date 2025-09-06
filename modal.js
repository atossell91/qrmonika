import { NumSpinner } from "./NumSpinner.js";

class modal {
    constructor(app) {
        this.app = app;
        this.ModalElem = document.getElementById("info-modal");
        this.ModalCloseButton = document.getElementById("modal-close-button");
        this.ModalSubmitButton = document.getElementById("modal-submit-btn");
        this.ModalItemName = document.getElementById("modal-item-name");
        this.ModalItemId = document.getElementById("modal-item-id");

        this.Spinner = new NumSpinner();

        this.ModalCloseButton.addEventListener("click", ()=>{ this.hide(); });
        this.ModalSubmitButton.addEventListener("click", ()=>{ this.hide(); })
    }

    show() {
        this.ModalElem.style.display = "block";
    }

    hide() {
        this.ModalElem.style.display = "none";
        this.Spinner.SetValue(0);
    }

    setItemName(name) {
        this.ModalItemName.innerText = name;
    }

    setItemId(id) {
        this.ModalItemId.innerText = id;
    }
}

export { modal };
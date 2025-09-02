import { QRScanner } from "./scanner.js"
import { index } from "./index.js"
import { modal } from "./modal.js";

class App {
    constructor() {
        this.scanner = new QRScanner(this.onScanSuccess);
        this.scanner.startScan();

        this.index = new index(this);
        this.modal = new modal(this);

        document.addEventListener("visibilitychange", ()=>{ this.handleVisibleChanged( document.visibilityState ); });
    }

    onScanSuccess = (value) => {
        // this will keep scanning rapidly. Deal with it!
        console.log(value);
        const object = JSON.parse(value);
        this.modal.show();
    }

    handleVisibleChanged(visibilityState) {
        if (visibilityState == "hidden") {
            this.scanner.stopScan();
            console.log("Hidden!")
        }
        else {
            this.scanner.startScan();
            console.log("Unhidden!")
        }
    }

    showModal() {
        this.modal.show();
    }

    hideModal() {
        this.modal.hide();
    }
}

export { App }
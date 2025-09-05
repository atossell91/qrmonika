import { QRScanner } from "./scanner.js"
import { index } from "./index.js"
import { modal } from "./modal.js";

class App {
    constructor() {
        this.scanner = new QRScanner(this.onScanSuccess);
        this.scanner.startScan();

        this.index = new index(this);
        this.modal = new modal(this);

        this.canScan = true;
        this.scanTimeout = 1000; //milliseconds

        document.addEventListener("visibilitychange", ()=>{ this.handleVisibleChanged( document.visibilityState ); });
    }

    onScanSuccess = (value) => {
        if (!this.canScan) return;
        this.canScan = false;

        const object = JSON.parse(value);
        const id = object["Item ID"];
        let name = "";
        fetch("https://rmsapi.corbli.com/getItemInfo?ItemID=" + id)
        .then((response)=> response.json())
        .then((object)=>{
            name = object["name"];
            this.modal.setItemId(id);
            this.modal.setItemName(name);
            this.modal.show();
        });

        setTimeout(()=>{ this.canScan = true; }, this.scanTimeout)
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
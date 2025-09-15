import { QRScanner } from "./scanner.js"
import { index } from "./index.js"
import { modal } from "./modal.js";
import { RemoteEndpoint } from "./RemoteEndpoint.js";

class App {
    constructor() {
        this.scanner = new QRScanner(this.onScanSuccess);
        this.scanner.startScan();

        this.index = new index(this);
        this.modal = new modal(this);

        this.RmsEndpoint = new RemoteEndpoint("https://rmsapi.corbli.com");

        this.canScan = true;
        this.scanTimeout = 1000; //milliseconds

        document.addEventListener("visibilitychange", ()=>{ this.handleVisibleChanged( document.visibilityState ); });
        document.addEventListener("modalSubmitted", (event)=>{ this.onModalSubmitted(event); });
    }

    onModalSubmitted = (event) => {
        const id = event.detail["id"];
        const quantity = event.detail["quantity"];

        const data = {
            ItemID:id,
            OwnerID:1,
            LocationID:1,
            Quantity:quantity,
            Type:1
        }

        console.log(data)

        this.RmsEndpoint.SendPOST("/addTransaction", data);
    }

    lana(itemId) {
        let name = "";
        this.RmsEndpoint.SendGET("/getItemData", { 
            ItemID: itemId,
            OwnerID: 1,
            LocationID: 1
        })
        .then((response)=> response.json())
        .then((object)=>{
            name = object["name"];
            const quantity = object["quantity"];
            this.modal.setItemId(itemId);
            this.modal.setItemName(name);
            this.modal.setItemQuantity(quantity)
            this.modal.show();
        });
    }

    onScanSuccess = (value) => {
        if (!this.canScan) return;
        this.canScan = false;

        const object = JSON.parse(value);
        const id = object["Item ID"];

        this.lana(id);

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
import { App } from "./App.js"

function main() {
    const app = new App();
}

document.addEventListener("DOMContentLoaded", ()=>{ main(); });
/*
function handleVisibleChange() {
    if (document.hidden) {
        html5Qrcode.stop();
    }
    else {
        startScan();
    }
}

document.addEventListener("DOMContentLoaded", ()=>{ init(); });
document.addEventListener("visibilitychange", ()=> { handleVisibleChange(); });
*/
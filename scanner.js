class QRScanner {
    constructor(onScanSuccess) {
        this.html5Qrcode = new Html5Qrcode("cam-view");
        this.scanSuccessFunc = onScanSuccess
    }

    startScan() {
        const config = { fps: 10, qrbox: { width: 250, height: 250 }};

        this.html5Qrcode.start({ facingMode: "environment"}, config, this.scanSuccessFunc);
    }

    stopScan() {
        this.html5Qrcode.stop();
    }
}

export { QRScanner }
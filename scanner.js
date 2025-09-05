class QRScanner {
    constructor(onScanSuccess) {
        this.html5Qrcode = new Html5Qrcode("cam-view");
        this.scanSuccessFunc = onScanSuccess
        this.scannerBox = 150;
    }

    startScan() {
        const config = { fps: 10, qrbox: { width: this.scannerBox, height: this.scannerBox }};

        this.html5Qrcode.start({ facingMode: "environment"}, config, this.scanSuccessFunc);
    }

    stopScan() {
        this.html5Qrcode.stop();
    }
}

export { QRScanner }
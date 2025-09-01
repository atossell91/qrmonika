class index {
    constructor(app) {
        this.app = app;
        this.CameraButton = document.getElementById("camera-button");
        this.ModalButton = document.getElementById("modal-button");

        this.CameraButton.addEventListener("click", ()=> {});
        this.ModalButton.addEventListener("click", ()=> { this.app.showModal(); });
    }


}

export { index };
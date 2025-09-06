class NumSpinner {
    constructor() {
        this.DecrementButton = document.getElementById("modal-num-spinner-minus");
        this.IncrementButton = document.getElementById("modal-num-spinner-plus");
        this.NumberDisplay = document.getElementById("modal-num-spinner-input");

        this.NumberValue = 0;
        this.NumberDisplay.value = this.NumberValue;

        this.IncrementButton.addEventListener("click", ()=>{ this.Increment(); });
        this.DecrementButton.addEventListener("click", ()=>{ this.Decrement(); });
    }

    SetValue(value) {
        this.NumberValue = value;
        this.NumberDisplay.value = this.NumberValue;
    }

    GetValue() {
        return this.NumberValue;
    }

    Increment() {
        this.SetValue(++this.NumberValue);
    }

    Decrement() {
        this.SetValue(--this.NumberValue);
    }
}

export { NumSpinner };

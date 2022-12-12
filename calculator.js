const currentOperation_text = document.getElementById('current-operation');
const perviousOperation_text = document.getElementById('pervious-operation');

export class Calculator {
  constructor(previous_operation, current_operation) {
    this.previous_operation = previous_operation;
    this.current_operation = current_operation;
    this.clear();
  }

  clear() {
    this.current_operation = "";
    this.previous_operation = "";
    this.operation = undefined;
    this.error = "";
  }

  delete() {
    this.current_operation = this.current_operation.slice(0, -1);
    display.value = this.current_operation;
  }

  displayNumber(number) {
    if (number == "0" && this.current_operation.includes('0')) return;
    if (number === '.' && this.current_operation.includes('.')) return;
    this.current_operation = this.current_operation.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.current_operation === "") return
    if (this.previous_operation !== "") {
      this.operate()
    }
    this.operation = operation;
    this.previous_operation = this.current_operation;
    this.current_operation = "";
  }

  operate() {
    let result;
    const previous = parseFloat(this.previous_operation)
    const current = parseFloat(this.current_operation)
    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        result = previous + current
        break;
      case '-':
        result = previous - current
        break;
      case '*':
        result = previous * current
        break;
      case '÷':
        if (current === 0) {
          this.error = "Can't divide by zero"
        }
        result = previous / current
        break;
      default: return
    }
    //this.current_operation = result;
    this.current_operation = +(Math.round(result + "e+6") + "e-6");
    this.operation = undefined;
    this.previous_operation = "";
  }

  updateResult() {
    if (this.error) {
      currentOperation_text.innerText = this.error;
      return
    }
    currentOperation_text.innerText = this.current_operation;
    if (this.operation != null) {
      perviousOperation_text.innerText = `${this.previous_operation} ${this.operation}`
    }
    else {
      perviousOperation_text.innerText = "";
    }
  }
}





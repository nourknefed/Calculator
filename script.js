import { Calculator } from './calculator.js';

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('del');
const perviousOperation_text = document.getElementById('pervious-operation');
const currentOperation_text = document.getElementById('current-operation');
const calculator = new Calculator(perviousOperation_text, currentOperation_text)

numberBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.displayNumber(btn.innerHTML);
    calculator.updateResult();
  })
})

for (const operataion of operationBtns) {
  operataion.addEventListener('click', () => {
    calculator.chooseOperation(operataion.innerHTML);
    calculator.updateResult();
  })
}

equalsBtn.addEventListener('click', () => {
  calculator.operate();
  calculator.updateResult();
})

clearBtn.addEventListener('click', () => {
  calculator.clear();
  calculator.updateResult();
});

deleteBtn.addEventListener('click', () => {
  calculator.delete();
  calculator.updateResult();
});

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equal]');
const clearBtn = document.querySelector('[data-clear]');
const currentOperandText = document.querySelector('.current-operand');
const negativeNumBtn = document.getElementById('negative');
const percentBtn = document.getElementById('percent');

class Calculator {
    currentOperand = ''
    previousOperand = ''
    constructor(currentOperandText) {
        this.currentOperandText = currentOperandText;
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendNum(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    negativeNum() {
        if (isNaN(this.currentOperand)) return
        this.currentOperand = parseFloat(this.currentOperand * -1)
    }

    percentNum() {
        if (isNaN(this.currentOperand)) return
        this.currentOperand = parseFloat(this.currentOperand * .1)
    }


    selectOperation(operation) {
        if (this.currentOperand === '') return //if current value is empty do not run function
        if (this.previousOperand !== '') {
            this.calculate()
        } //if previous operation is not empty then run the calculate function
        this.operation = operation;
        this.previousOperand = this.currentOperand; //saves previous operand
        this.currentOperand = ''; //clears current operand data allowing new input!

    }

    calculate() {
        let answer;
        const x = parseFloat(this.previousOperand);
        const y = parseFloat(this.currentOperand);
        if (isNaN(x) || isNaN(y)) return //if x or y is empty do not run
        switch (this.operation) {
            case '+':
                answer = x + y;
                break;
            case '-':
                answer = x - y;
                break;   
            case 'x':
                answer = x * y;
                break; 
            case '/':
                answer = x / y;
                 break;   
            default: 
                return; 
        }
        this.currentOperand = answer;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand
    }
}

const calculator = new Calculator(currentOperandText);
    
 numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText) 
        calculator.updateDisplay()
    })
 });

 operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectOperation(button.innerText) 
        calculator.updateDisplay()
    })
 });

 negativeNumBtn.addEventListener('click', button => {
    calculator.negativeNum();
    calculator.updateDisplay()
 });

 percentBtn.addEventListener('click', button => {
    calculator.percentNum();
    calculator.updateDisplay();
 });

 equalBtn.addEventListener('click', button => {
    calculator.calculate();
    calculator.updateDisplay()
 });

 clearBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();

 });
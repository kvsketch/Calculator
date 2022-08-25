const display = document.querySelector(".display");
const displayNum = document.createElement("div");

let number = []; //use to create current number
let current = "";
let operation = []; //use to store number values

function currentNumber(value) {
  number.push(value);
  for (i = 0; i < number.length; i++) {
    current = number.join("");
    displayNum.textContent = current;
  }
  display.appendChild(displayNum);
  clear();
}

function operator(operator) {
    if (operation.length >= 2) {
        operation.splice(0, 2);
        operation[0] = answer;
      }
  switch (operator) {
    case "+":
      operation.push(Number(current));
      console.log(operation);
      number = [];
      answer = sum();
      break;
    case "-":
      operation.push(Number(current));
      console.log(operation);
      number = [];
      answer = difference();
      break;
    case "x":
      operation.push(Number(current));
      number = [];
      answer = product();
      break;
    case "/":
      operation.push(Number(current));
      number = [];
      answer = quotient();
      break;
  }
  compute(operator)
  displayNum.textContent = answer;
}

function compute(operator) {
    const equalBtn = document.getElementById('=')
    equalBtn.addEventListener('click', () => {
    if (operation[0] != null && opeation [1] != null) {
        if (operator == '+') {
            answer = sum();
            displayNum.textContent = answer;
        }
    }
});
}

function clear() {
    const btnClear = document.getElementById('clear');
    btnClear.addEventListener('click', () => {
        if (current != '' || answer != '') {
        number = [];
        displayNum.textContent = '';
        };
    })
}


let sum = () => operation.reduce((x, y) => x + y);
let difference = () => operation.reduce((x, y) => x - y);
let product = () => operation.reduce((x, y) => x * y);
let quotient = () => operation.reduce((x, y) => x / y);


//Take current value *
//upon clicking operator reset the current value and store it *
//collect new current value and output the answer if clicking operator * or = *
//store answer and allow it to be used with an operator or clear the calculator
//if only 1 current number clear if operation is greater than 2 allow AC after number is nothing

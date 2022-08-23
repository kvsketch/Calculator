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
}

function operator(operator) {
  switch (operator) {
    case "+":
      operation.push(Number(current));
      number = [];
      answer = sum();
      break;
    case "-":
      operation.push(Number(current));
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
  displayNum.textContent = answer;
  //if operation length reaches 2, make operation array only answer left
  if (operation.length >= 2) {
    operation.splice(0, 2);
    operation[0] = answer;
  }
}

let sum = () => operation.reduce((x, y) => x + y);
let difference = () => operation.reduce((x, y) => x - y);
let product = () => operation.reduce((x, y) => x * y);
let quotient = () => operation.reduce((x, y) => x / y);


//Take current value *
//upon clicking operator reset the current value and store it *
//collect new current value and output the answer if clicking operator * or = *
//store answer and allow it to be used with an operator or clear the calculator

const display = document.querySelector('.display');
let displayNum = document.createElement('div');


const number = [];
let finalNum = '';

function currentNumber(value) {
    
    console.log(value);
    number.push(value);
    for (i = 0; i < number.length;i++) {
        let combine = number.join("");
        finalNum = combine;
        displayNum.textContent = finalNum;
        console.log(combine)
    } 
    display.appendChild(displayNum);
}

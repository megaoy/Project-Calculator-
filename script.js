function add(number1,number2)
{
    return number1 + number2;
}

function subtract(number1,number2)
{
    return number1 - number2;
}

function multiply(number1,number2)
{
    return number1 * number2;
}

function divide(number1,number2)
{
    return number1 / number2;
}
function operate(number1,number2,operator)
{
    switch(operator)
    {
        case "+":
            return add(number1,number2);
            break;
        case "-":
            return subtract(number1,number2);
            break;
        case "*":
            return multiply(number1,number2);
            break;
        case "/":
            return divide(number1,number2);
            break;
        default:
            return "wrong option";
            break;
    }
}

function updateDisplay(display,value)
{
    display.value = display.value + value;
    console.log(value);
}
let number1;
let number2;
let operator;

let display = document.querySelector("#display");

let numbers = document.querySelectorAll('button.number');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => {
        updateDisplay(display,numbers[i].textContent);
    });
    
    
}

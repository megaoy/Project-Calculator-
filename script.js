function add(number1,number2)
{
    display.value = number1 + number2;
}

function subtract(number1,number2)
{
    display.value = number1 - number2;
}

function multiply(number1,number2)
{
    display.value = number1 * number2;
}

function divide(number1,number2)
{
    display.value = number1 / number2;
}

function clear(){
    number1 = "";
    number2 = "";
    operator = "";
    display.value = "";
}
function operate()
{
    
    number2 = parseFloat(display.value)
    
    

    switch(operator)
    {
        case '+':
            add(number1,number2);
            break;
        case "-":
            subtract(number1,number2);
            break;
        case "X":
            multiply(number1,number2);
            break;
        case "/":
            divide(number1,number2);
            break;
        case 'C':
            clear()
            break;
        default:
            // return "wrong option";
            break;
    }
}

function updateDisplay(value)
{
    display.value = display.value + value;
    
}

function setOperation(operation){
    
    number1  = parseFloat(display.value);
    display.value = "";
    operator = operation;
}
let number1 = 0;
let number2 = 0;
let operator = "";

let display = document.querySelector("#display");
let operations = document.querySelectorAll('button.operator');
let numbers = document.querySelectorAll('button.number');

let equal_action = document.querySelector('#equal_action')
equal_action.addEventListener("click", (event) => {
    operate();
});

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => {
        updateDisplay(numbers[i].textContent);
    });
    
}

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", (event) => {
        setOperation(operations[i].textContent);
    });
    
}
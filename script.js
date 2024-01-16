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

let number1;
let number2;
let operator;

console.log("function add test: " + operate(1,1,'+'));

console.log("function subtract test: " + operate(1,1,'-'));

console.log("function multiply test: " + operate(1,1,'*'));

console.log("function divide test: " + operate(1,1,'/'));

console.log("function divide test: " + operate(1,1,'9'));
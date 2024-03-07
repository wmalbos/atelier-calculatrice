import {calculate} from "./calculator.js";

const calculatorInputDisplay = document.getElementById('calculatorInputDisplay');
const calculatorButtons = document.querySelectorAll('.button');

const operators = ['+', '-', '*', '/', '%'];

let outputDisplay = '';

let firstNumber = '';
let secondNumber = '';
let operator = '';


const isOperator = buttonText => operators.includes(buttonText);
const isDigit = buttonText => !isNaN(parseInt(buttonText));
const isEquals = buttonText => buttonText === '=';
const isAC = buttonText => buttonText === 'AC';


const handleDigit = (buttonText) => {
    outputDisplay += buttonText;
    calculatorInputDisplay.value = outputDisplay;
}

const handleOperator = (buttonText) => {
    if (operator === '') {
        firstNumber = parseFloat(outputDisplay);
        operator = buttonText;
        outputDisplay = '';

    } else {
        secondNumber = parseFloat(outputDisplay);

        const result = calculate(firstNumber, secondNumber, operator);
        outputDisplay = result.toString();
        calculatorInputDisplay.value = firstNumber;

        firstNumber = result;
        operator = buttonText;
        secondNumber = '';
    }
}
const handleEquals = () => {
    secondNumber = parseFloat(outputDisplay);

    const result = calculate(firstNumber, secondNumber, operator);
    outputDisplay = result.toString();
    calculatorInputDisplay.value = outputDisplay;

    firstNumber = '';
    operator = '';
    secondNumber = '';
}

const handleAC = () => {
    outputDisplay = '';
    calculatorInputDisplay.value = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

Array.from(calculatorButtons).forEach(button => {

    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        if (isDigit(buttonText)) handleDigit(buttonText);
        else if (isOperator(buttonText)) handleOperator(buttonText);
        else if (isEquals(buttonText)) handleEquals();
        else if (isAC(buttonText)) handleAC();

    });

});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) return Infinity;
    return a / b;
}

function operate (a, b, op) {
    switch(op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

let display = document.querySelector("#display");

let firstOperand = null;
let operator = null;

function appendValue(text) {
    if(["+", "-", "*", "/"].includes(text)) {
        if (operator !== null) {
            calculate()
        }
    firstOperand = +display.value;
    operator = text;
    display.value = "";
    } else {
        if (text === "." && display.value.includes(".")) return;

        display.value += text;

    }
}

function calculate() {
    if (firstOperand === null || display.value === "") return;
    const secondOperand = +display.value;

    const ans = operate(firstOperand, secondOperand, operator);

    display.value = Math.round(ans * 1000) / 1000;

    firstOperand = null;
    operator = null;
}

function clearDisplay() {
    display.value = "";

    firstOperand = null;
    operator = null;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}
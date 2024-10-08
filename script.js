let numA = "";
let onNumA = true;
let numB = "";
let operator = "";
let currentDisplay = document.getElementById("display");

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if(b == 0) {
        return "error";
    } else {
        return a / b;
    };
};

function doOperation(firstNum, secondNum, operation) {
    if(operation === "+") {
        return add(firstNum, secondNum);
    } else if(operation === "-") {
        return subtract(firstNum, secondNum);
    } else if(operation === "*") {
        return multiply(firstNum, secondNum);
    } else if(operation === "/") {
        return divide(firstNum, secondNum);
    } else {
        return "error";
    }
}

function readclick(sentVal) {
    if(parseInt(sentVal) >=0 && parseInt(sentVal) <=9 && onNumA === true) {
        numA += sentVal;
        currentDisplay.innerHTML += sentVal;
    } else if(parseInt(sentVal) >=0 && parseInt(sentVal) <=9 && onNumA === false) {
        numB += sentVal;
        currentDisplay.innerHTML += sentVal;
    } else if(sentVal === '+' || sentVal === '-' || sentVal === '*' || sentVal === '/') {
        operator = sentVal;
        onNumA = false;
        currentDisplay.innerHTML += sentVal;
    } else if(sentVal === '=') {
        currentDisplay.innerHTML = doOperation(parseFloat(numA), parseFloat(numB), operator);
    }
}

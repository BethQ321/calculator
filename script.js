let numA = 3;
let numB = 456;
let operator = "";

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

console.log(add(numA, numB));

console.log(subtract(numA, numB));

console.log(multiply(numA, numB));

console.log(divide(numA, numB));
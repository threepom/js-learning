"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage("Hello World From Parameter!");
console.log(`Num: ${num}`);

function calculate(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

console.log(calculate(4, 3));

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => a - b;

console.log(calc(9, 3));

const usdCurr = 28;
const eurCurr = 30;
const gbpCurr = 40;

function convert(curr, amount) {
    console.log(curr * amount);
}

convert(usdCurr, 500);
convert(eurCurr, 600);
convert(gbpCurr, 700);

const discount = 0.9;

function currencyConvert(curr, amount) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(currencyConvert(usdCurr, 500));
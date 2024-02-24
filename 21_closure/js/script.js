"use strict";

let number = 5;

logGlobalNumber();

function logNumber() {
    let number = 4;
    console.log(number);
}

function logGlobalNumber() {
    console.log(number);
}

number = 6;

logGlobalNumber();

logNumber();

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

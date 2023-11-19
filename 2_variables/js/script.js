"use strict";

let number = 5;
const leftBorderWidth = 11;

number = 15;
console.log(`Number: ${number}`);

var name = 'John';
name = 'Alex';
console.log(`Name: ${name}`);

console.log(4/0);
console.log('string' * 9);

const person = 'Alex';

const isPerson = true;

let undefinedVariable;
console.log(undefinedVariable);

const obj = {
    name: 'John',
    age: 23,
    hasJob: true,
    wife: {
            name: 'Kate'
          }
};

obj.isMarried = false;

console.log(obj.name);
console.log(obj['age']);
console.log(obj.isMarried);
console.log(obj.wife.name);

let fruits = ['plum', 'orange', 'banana'];
console.log(fruits);
console.log(fruits[1]);
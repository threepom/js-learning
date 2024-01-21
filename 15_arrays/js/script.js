"use strict";

const arr = [1, 2, 3, 6, 5, 8];

arr.pop();

console.log(arr);

arr.push(11);

console.log(arr);

arr.sort((a, b) => a - b);

for(let number of arr) {
    console.log(number);
}

arr.forEach(function (elem, numberInArray, arr) {
    console.log(elem);
    console.log(numberInArray);
    console.log(arr);
})

arr.forEach((element) => console.log(element));

console.log(`Array length: ${arr.length}`);

const str = prompt("", "");
const products = str.split(", ");
alert(products);

const names = ["John", "Bill", "Dave"];
names.sort();
const stringNames = names.join(" - ");
alert(stringNames);
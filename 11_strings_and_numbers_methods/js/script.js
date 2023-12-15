"use strict";

const str = "test";
console.log(str.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(0, 5));
console.log(logg.substring(0, 5));
console.log(logg.substr(0, 3));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
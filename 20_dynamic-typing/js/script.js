"use strict";

console.log(typeof(String(null)));
console.log(typeof(5 + ''));

const num = 5;
console.log(`https://vk.com/catalog/${num}`);


console.log(typeof(Number('5')));
console.log(typeof(+'5'));
console.log(typeof(parseInt('15px', 10)));

// Always turns to false
// 0, '', null, undefined, NaN

let switcher = null;

if (!switcher) {
    console.log(`NOT Working!`);
}

switcher = 1;

if (switcher) {
    console.log(`Working!`);
}

console.log(typeof(Boolean('5')));
console.log(typeof(!!"5"));
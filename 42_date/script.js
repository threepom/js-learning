'use strict';

// const now = new Date(2024, 4, 7, 20);
const now = new Date();
const before = Date.parse('2021-10-11');

console.log(`Before: ${before}`);

now.setFullYear(2021);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getTime());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset());

let start = new Date();

for(let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Cycle time: ${end - start} milliseconds`);
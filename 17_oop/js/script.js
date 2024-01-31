"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 3, 5]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log(`Hello!`);
    }
};

const john = {
    health: 100
};

// john.__proto__ = soldier;
Object.setPrototypeOf(john, soldier);

console.log(john);
console.log(john.armor);
john.sayHello();

const sam = Object.create(soldier);
console.log(sam);
console.log(sam.armor);
sam.sayHello();
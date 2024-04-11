'use strict';

// let id = Symbol('id');

// const obj = {
//     name: 'Test',
//     [id]: 1,
//     getId: function() {
//         return this[id];
//     }
// }

// // let id = Symbol('id');
// // obj[id] = 1;

// console.log(obj.getId());
// console.log(Object.getOwnPropertySymbols(obj));

// for (const value in obj) {
//     console.log(value);
// }

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
}

myAwesomeDB.id = "122231452567";

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);
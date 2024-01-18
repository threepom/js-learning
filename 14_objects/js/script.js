"use strict";

const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
        border: 'black',
        bg: 'red' 
   },
   makeTest: function () {
    console.log(`Test is started...`);
   } 
}; 

console.log(options.name);

delete options.name;

console.log(options);

let counter = 0;
for (let key in options) {
    console.log(key);
    console.log(options[key]);
    counter++;
}

console.log(`Object fields number: ${counter}`);

console.log(Object.keys(options));

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
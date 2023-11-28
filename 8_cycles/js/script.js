"use strict";

let num = 50;

while (num < 55) {
    console.log(`Num: ${num}`);
    num++;
}

num = 50;

do {
    console.log(`Num: ${num}`);
    num++; 
} while (num < 55);


for (let i = 0; i < 5; i++) {
    if (i === 1) {
        continue;
    }
    if (i === 3) {
        break;
    }
    console.log(`III: ${i}`);    
}

for (let i = 0; i < 3; i++) {
    console.log(`I: ${i}`); 
    for (let j = 0; j < 3; j++) {
        console.log(`J: ${j}`);   
    } 
}

let asterisks = "";
for (let i = 1; i < 6; i++) {    
    for (let j = 0; j < i; j++) {
      asterisks = asterisks + "*";
    }
    asterisks += "\n";       
}
console.log(asterisks);
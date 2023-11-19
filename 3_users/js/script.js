"use strict";

alert("Hello");

const result = confirm("ARE YOU HERE?");
console.log(`RESULT: ${result}`);

const answer = prompt("What's your age?", "18");
console.log(`Answer: ${answer}`);
console.log("Type: " + typeof(answer));

const answers = [];
answers[0] = prompt("What's your name?");
answers[1] = prompt("What's your last name?");
answers[2] = prompt("Do you have a pet?");
// console.log(`Answers: ${answers}`);
document.write(answers);


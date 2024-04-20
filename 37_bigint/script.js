'use strict';

const bigint = 131314056264726476464646664666363633627777n;
const sameBigint = BigInt(113787286472569264984768978478764864);
console.log(typeof(bigint));

// Don't use bigint with Math
// Don't use bigint with ordinary numbers

console.log(5n / 2n); //equals 2n 
console.log(2n === 2); //equals false 
console.log(2n == 2); //equals true 

let someBigint = 1n;
let number = 2;

console.log(someBigint + BigInt(number));
console.log(Number(someBigint) + number);
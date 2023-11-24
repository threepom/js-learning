"use strict";

const num = 50;

 if (num < 49) {
    console.log("Error");
 } else if (num > 100){
    console.log("To much!");
 } else {
    console.log("Ok!");
 }

 num === 50 ? console.log("Ok!") : console.log("Error!");

 switch (num) {
    case 50:
        console.log("Ok! It's fifty!");
        break;
    case 40:
        console.log("Error");
        break;
    case 100:
        console.log("To much!");
        break;
    default:
        console.log("No condition!");
        break;
 }

 const containsHamburger = true;
 const containsFries = true;

 if (containsHamburger && containsFries) {
    console.log("I'm full");
 } else {
    console.log("I'm hungry!");
 }

 const colaNumber = 3;
 const hotDogNumber = 1;
 const fantaNumber = 0;
 const nuggetsNumber = 2;

if (colaNumber === 3 && fantaNumber === 1 && hotDogNumber) {
    console.log("All are full");
} else {
    console.log("We go away!");
}

if (colaNumber || fantaNumber || hotDogNumber){
    console.log("We'll stay here!");
} else {
    console.log("We go away!");
}

if (colaNumber === 3 && hotDogNumber === 2 || nuggetsNumber) {
    console.log("We'll stay here!");
} else {
    console.log("We go away!");
}
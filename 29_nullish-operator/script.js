'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h}px`;
    elem.style.width = `${w}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);  
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;
console.log(userName ?? userKey ?? 'User');

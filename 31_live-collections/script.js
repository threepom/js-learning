'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box => {
    if(box.matches('.this')) {
        box.style.backgroundColor = 'yellow';
    }
})

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div); 
}

console.log(boxesQuery[0].closest('.wrapper'));
console.log(boxesQuery);
console.log(boxesGet);
console.log(document.body.children);

console.log(Array.from(boxesGet));
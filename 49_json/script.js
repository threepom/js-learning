'use strict';

const person = {
    name: 'John',
    tel: '+744444444',
    parents: {
        mom: 'Jane',
        dad: 'Wil'
    }
};

console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));
// Deep copy
const person2 = JSON.parse(JSON.stringify(person));
person2.parents.dad = 'Mike';

console.log(person);
console.log(person2);
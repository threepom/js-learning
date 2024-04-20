'use strict';

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set = new Set(arr);
console.log(set);

set.add('Ivan');

set.delete('Ann');
console.log(`Set has Alex: ${set.has('Alex')}`);
// set.clear();
console.log(`Set size: ${set.size}`);

// Iterate
for(let value of set) {
    console.log(`Student is: ${value}`);
}

set.forEach((value, valueAgain, set) => {
    console.log(`Student from forEach: ${value}`);
});

console.log(`Set values: ${set.values()}`);
console.log(`Set keys: ${set.keys()}`);
console.log(`Set entries: ${set.entries()}`);

set.entries().forEach((entry) => {
    console.log(entry);
});

function unique(arr) {
    return Array.from(new Set(arr));
}
"use strict";

let a = 5;
let b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy.a);
console.log(obj.a);

// How to copy

function copyObject(objectForCopy) {
    let objCopy = {};
    let key;
    for (key in objectForCopy) {
       objCopy[key] = objectForCopy[key];
    }

    return objCopy;
}

let objectCopy = copyObject(obj);
objectCopy.a = 15;

console.log(copy.a);
console.log(obj.a);
console.log(objectCopy.a);

const numbers = {
    a: 7,
    b: 9,
    c: {
        x: 3,
        y: 5
    }
}

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 25;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[0] = 'd';
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [3, 5, 7];
log(...num);

const names = ['John', 'Tom', 'Jack'];
const namesCopy = [...names];
namesCopy[0] ='Alice';
console.log(namesCopy);

const man = {
    name: 'John',
    secondName: 'Lydon',
    age: 60
};

const manCopy = {...man};
manCopy.name = 'Sid';
manCopy.secondName = 'Vicious';
manCopy.age = 21;

console.log(man);
console.log(manCopy);
'use strict';

let user = {name: 'Ivan'};
// const arr = [user];
let map = new WeakMap();
map.set(user, 'data');
user = null;

console.log(`User: ${user}`);
// console.log(`User from arr: ${JSON.stringify(arr[0])}`);
console.log(map.has(user));

let cache = new WeakMap();

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let john = {name: 'John'};
let jim = {name: 'Jim'};
let tom = {name: 'Tom'};

cacheUser(john);
cacheUser(jim);
cacheUser(tom);

john = null;

console.log(`Is John in the chat: ${cache.has(john)}`);
console.log(`Is Jim in the chat: ${cache.has(jim)}`);
console.log(`Is Tom in the chat: ${cache.has(tom)}`);

// WeakSet allows methods add, has, delete

let messages = [
    {text: 'Hello!', from: 'John'},
    {text: 'World!', from: 'Jim'},
    {text: 'Smthng!', from: 'Tom'}
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
// readMessages.add(messages[1]);
messages.shift();
console.log(readMessages.has(messages[0]));



console.log(readMessages.has(messages[0]));
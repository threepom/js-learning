'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1981',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

Object.defineProperty(user, 'birthday', {writable: false});

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
Object.defineProperty(user, 'name', {writable: false});
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
Object.defineProperty(user, 'gender', {value: 'male'});
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

for(let key in user) {
    console.log(key);
}

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});

// writable
// enumerable
// configurable
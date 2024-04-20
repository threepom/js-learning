'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1981',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

for(const key in user) {
    console.log(user[key]);
}

const arr = ['b', 'a', 'c'];

for(const value of arr) {
    console.log(value);
}

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello!');
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,
        next() {
            if(this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
            
        }
    }
}

for(let res of salaries) {
    console.log(res);
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
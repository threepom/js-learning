// 'use strict';

function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}

showThis(3, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);

        function shout() {
            console.log(`Context in the shout()`);
            console.log(this);
        }
        shout();
    }
};

obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello! I'm ${this.name}`);
    }
}

let ivan = new User(`Ivan`, 23);

function sayName (surname) {
    console.log(`Info from sayName()`);
    console.log(this);
    console.log(`${this.name} ${surname}`);
}

const user = {
  name: `John`
};

const user2 = {
  name: `Ann`
};

let usersArray = [user, user2];

sayName.call(user, `Smith`);
sayName.apply(user2, [`Jones`]);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(7));

// 1) this = window, if use strict => this = undefined
// 2) inside the object "this" refers to this object
// 3) inside constructors and classes - "this" is a new object instance
// 4) we can add "this" using call, apply and bind

const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'red';
});

const obj2 = {
    number: 5,
    sayNumber: function () {
        const say = () => {
            console.log(`Info from say()`);
            console.log(this);
        }

        say();
    }
};

obj2.sayNumber();

const triple = a => a * 3;
console.log(`Triple: ${triple(3)}`);
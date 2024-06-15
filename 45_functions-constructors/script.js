'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello! I'm ${this.name}`);
    }
}

User.prototype.exit = function() {
    console.log(`Ok. ${this.name} goes home.`);
};

const john = new User('John', '1');
const alex = new User('Alex', '2');
console.log(john);
console.log(alex);
alex.hello();
john.exit();


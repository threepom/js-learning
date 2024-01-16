"use strict";

function first(callback) {
    setTimeout(function () {
        console.log(1);
        callback();
    }, 500)
}

function second() {
    console.log(2);
}

first(second);
// second();

function learnJS(lang, callback) {
    console.log(`I'm learning ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log(`This is a callback function!`);
})
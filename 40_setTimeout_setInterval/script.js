const btn = document.querySelector('.btn');
let log,
    counter = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if(pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const log = setTimeout(logger, 3000);
//     log = setInterval(logger, 3000);
// });



// const timerId = setTimeout(function() {
//     console.log('Hello!');
// }, 5000);

// const timerIdText = setTimeout(function(text) {
//     console.log(text);
// }, 7000, 'Hello text!');

// function logger() {
//     if(counter == 3) {
//         clearInterval(log);
//     }
//     console.log('text');
//     counter++;
// }

// let id = setTimeout(function logIt() {
//     console.log('Hello from log');
//     id = setTimeout(logIt, 500);
// }, 500);

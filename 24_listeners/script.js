const button = document.querySelector(`#btn`);
const overlay = document.querySelector(`.overlay`);
const buttons = document.querySelectorAll(`button`);
// button.onclick = function () {
//     alert(`Click`);
// };

// let i = 0;

const deleteTarget = function(event) {
    // alert(`Click from Event Listener`);
    // console.log (event.target);
    console.log (event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     button.removeEventListener('click', deleteTarget);
    // }
    // event.target.remove();
};

button.addEventListener('click', deleteTarget);
overlay.addEventListener('click', deleteTarget);

const link = document.querySelector(`a`);
link.addEventListener(`click`, (event) => {
    event.preventDefault();
    console.log(event.target);
});

buttons.forEach((btn, index) => {
    btn.addEventListener(`click`, () => {console.log(`Click on button ${index + 1}`);}, {once: true});
});

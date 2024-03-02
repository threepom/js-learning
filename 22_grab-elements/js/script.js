"use strict";

const box = document.getElementById(`box`);
box.style.backgroundColor = `yellow`;
box.style.width = `500px`;

const buttons = document.getElementsByTagName(`button`);
buttons[1].style.borderRadius = `30px`;


const circles = document.getElementsByClassName(`circle`);
circles[1].style.cssText = `background-color: green; border: 2px solid black;`

const hearts = document.querySelectorAll(`.heart`);
// for (let index = 0; index < hearts.length; index++) {
//     const element = hearts[index];
//     element.style.backgroundColor = `blue`;
// }

hearts.forEach(item => {
    item.style.backgroundColor = `green`; 
});

const oneHeart = document.querySelector(`.heart`);

const div = document.createElement(`div`);
const text = document.createTextNode(`Hello World`);

div.classList.add(`black`);
// document.body.append(div);

let wrapper = document.querySelector(`.wrapper`);
wrapper.appendChild(div);
// wrapper.append(div.cloneNode(true)); // клонируем div и добавляем его
// wrapper.append(div.cloneNode(true)); // клонируем div и добавляем его
// wrapper.prepend(div);

// hearts[1].before(div);
// hearts[1].after(div);
wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
wrapper.replaceChild(div, hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";

div.insertAdjacentHTML('beforebegin', '<h2>Hello!</h2>')
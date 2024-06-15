'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;

const scrollWidth = box.scrollWidth;
const scrollHeight = box.scrollHeight;

console.log(width, height);
console.log(offsetWidth, offsetHeight);
console.log(scrollWidth, scrollHeight);

btn.addEventListener('click', () => {
    // box.style.height = scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.clientWidth);

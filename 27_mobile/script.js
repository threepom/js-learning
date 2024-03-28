// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    // box.addEventListener('', () => {

    // });
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log(`Start`);
        console.log(`${e.targetTouches}`);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(`${e.targetTouches[0].pageX}`);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log(`End`);
    });
    
});

// touches - provides a list of all fingers which are on the screen
// targetTouches - provides a list of all fingers which are interact with the element
// changedTouches - provides a list of the fingers which are take part in the current event
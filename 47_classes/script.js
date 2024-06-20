'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProperties() {
        console.log(`The properties are: text: ${this.text}; bgColor: ${this.bgColor}`);
    }
}

const coloredSquare = new ColoredRectangleWithText(11, 11,
    'Hello world!', "yellow");

console.log('Area of the colored square is: ' + coloredSquare.calcArea());
coloredSquare.showMyProperties();

const square = new Rectangle(5, 5);
console.log(`The area is: ${square.calcArea()}`);
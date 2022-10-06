'use strict';

const rectangle = {
  currentWidth: 5,
  currentHeight: 5,
  set width(value) {
    this.currentWidth = value;
  },
  set height(value) {
    this.currentHeight = value;
  },
  get perimeter() {
    return console.log(`${(this.currentWidth + this.currentHeight) * 2}см`);
  },
  get square() {
    return console.log(`${this.currentWidth * this.currentHeight}см`);
  },
};

rectangle.width = 10;
rectangle.height = 6;
rectangle.perimeter;
rectangle.square;

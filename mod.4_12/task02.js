'use strict';

const randomArray = (arr) => {
  arr.push(Math.floor(Math.random() * 10 + 1));
  const res = arr.reduce((sum, item) => sum += item, 0);
  if (res < 50) {
    console.log(arr);
    return randomArray(arr);
  } else {
    return arr;
  }
};

console.log(randomArray([]));

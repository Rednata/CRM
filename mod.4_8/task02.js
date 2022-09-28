const randomArray = (num, x1, x2) => {
  const newArr = [];  
  min = Math.min(x1, x2);
  max = Math.max(x1, x2);
  for (let i = 0; i < num; i++) {    
    newArr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return newArr;
}

const count = 10;
const n = 10;
const m = 50;
console.log(randomArray(count, n, m));

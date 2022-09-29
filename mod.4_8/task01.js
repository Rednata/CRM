const randomArray = (num) => {
  const newArr = []
  for (let i = 0; i < num; i++) {
    newArr.push(Math.trunc(Math.random() * 100 + 1));
  }
  return newArr;
}

const count = 10;
console.log(randomArray(count));

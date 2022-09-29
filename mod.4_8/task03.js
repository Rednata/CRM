const randomArray = (num, x1, x2, str) => {
    const newArr = [];  
    min = Math.min(x1, x2);
    max = Math.max(x1, x2);    
    
    while (newArr.length < num) {
      let arrNumber = Math.floor(Math.random() * (max - min + 1) + min);
      if (str === 'even') {
        if (arrNumber % 2 === 0) {
          newArr.push(arrNumber);
        }
      } else {
        if (!(arrNumber % 2 === 0)) {
          newArr.push(arrNumber);
      }    
    }
  }
    return newArr;
  }
  
  const count = 10;
  const n = 10;
  const m = 50;
  const str = 'odd';
  console.log(randomArray(count, n, m, str));
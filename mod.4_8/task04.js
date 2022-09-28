const leapYear = (x1, x2) => {
  min = Math.min(x1, x2);
  max = Math.max(x1, x2);
  const newArr = [];
  const yearArr = [];
  
  // Заполняю массив заданным интервалом
  for (let i = min; i <= max; i++) {
    newArr.push(i);    
  }
  // Нахожу високосные года
  newArr.forEach(item => {
    if ( 
      item % 400 === 0 || 
      item % 4 === 0 && item % 100 !=0 ) {
      yearArr.push(item);
    }
  });
  return yearArr;
}

const n = 1200;
const m = 1100;
console.log(leapYear(n, m));
const getAverageValue = (arr) => {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return Math.floor(sum / arr.length);
}

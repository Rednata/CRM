const getAveragePriceGoods = (arr) => {
  const newArr = [];
  for (const i of arr) {
    const[count, sum] = i;
    newArr.push((sum/count).toFixed(2));
  }
  return newArr;
}


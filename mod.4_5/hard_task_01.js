const nod = (a, b) => {
  let res;
  let res1;
  if (a > b) {
    res = a / b;
    res1 = a % b;
  } else {
    res = b / a;
    res1 = b % a;
  }
  if (Number.isInteger(res)) {
    return Math.min(a, b);
  } else {
    return nod(Math.min(a, b), res1);
  }  
}

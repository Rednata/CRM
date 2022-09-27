const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (Number.isInteger(num / i)) {
      return false;
    }
  }
  return true;
}

const calculate = (sum, count, promo) => {
  if (count > 10) {
    sum *=0.97;      
  };
  if (sum > 30000) {
    sum -= (sum - 30000) * 0.15;
  }
  if (promo === "METHED") {
    sum *= 0.9;    
  }
  if ( (promo === "G3H2Z1") && (sum > 2000) ) {
    sum -= 500;
  }
  return sum;
}

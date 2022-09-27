const inverted = (str) => {
  let strInvert = '';  
  for (let i = str.length - 1; i >= 0; i--) {
    strInvert += str[i];
  }
  return strInvert;
}
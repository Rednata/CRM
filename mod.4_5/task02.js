const makeCapitalLetter = (str) =>{
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(makeCapitalLetter("привет Мир"));
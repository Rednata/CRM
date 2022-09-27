const addPrefix = (arr, prefix) => {
  const prefixArr = []
  for (const i of arr) {
    prefixArr.push(`${prefix} ${i}`);
  }
return prefixArr;
}

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'));

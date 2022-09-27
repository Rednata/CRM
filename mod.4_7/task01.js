const filter = (arr1, arr2) => {
  const cloneArr1 = [...arr1];  
  for (const i of arr2) {    
    cloneArr1.splice(cloneArr1.indexOf(i), 1); 
  }
  return cloneArr1;
}
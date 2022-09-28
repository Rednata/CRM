const guessNumber = () => {
  const number = Math.floor(Math.random()*100 + 1);
  console.log('Загаданное число: ', number);
  let userNumber = '';

  while (number !== userNumber) {
    userNumber = +prompt('Введите число');    
    if (userNumber === 0) {
      alert('Игра окончена'); 
      break;     
    } else if (Number.isNaN(userNumber)) {
      alert('Введи число!');
    } else if (userNumber > number) {
      alert('Меньше!');
    } else if (userNumber < number) {
      alert('Больше!');
    } else if (number === userNumber){
      alert('Правильно!');
    }
  } 
}

guessNumber();


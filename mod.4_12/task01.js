'use strict';

const guessNumber = () => {
  const number = Math.floor(Math.random() * 100 + 1);
  console.log('Загаданное число: ', number);
  const userNumber = '';

  const inputNumber = (userNumber) => {
    userNumber = +prompt('Введите число');
    if (number === userNumber) {
      return alert('Правильно!');
    } else if (Number.isNaN(userNumber)) {
      alert('Введи число!');
      return inputNumber();
    } else if (userNumber > number) {
      alert('Меньше!');
      return inputNumber();
    } else if (userNumber < number) {
      alert('Больше!');
      return inputNumber();
    }
  };
  inputNumber(userNumber);
};

guessNumber();


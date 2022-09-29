const guessNumber = (x1, x2) => {

  // Функция "больше-меньше"
  const getCompare = (a) => {
    if (a > number) {
      alert('Меньше!');
    } else if (a < number) {
        alert('Больше!');
      } else if (a === number) {
        alert('Правильно!');
    }
  }

  // Рандомится число
  const number = Math.floor(Math.random() * (x2 - x1 + 1) + x1);    
  console.log('Загаданное число: ', number);
  const arr = [];
  let userNumber = '';
  let count;

  // Считаю количество попыток
  if (x1 >= 50 && x2 <= 100) {
    count = 15;
  } else {
    count = Math.trunc((x2 - x1) * 0.3);
  }
  alert(`Количество попыток: ${count}`);

  // Добавляю /не добавляю число в массив с попытками и вызываю функцию для сравнения с загаданным числом
  let i = 0;
  while (i < count ) {
    userNumber = +prompt('Введите число');
    if (arr.find(item=> item === userNumber)) {
      alert('Это число вы уже вводили');
    } else if (Number.isNaN(userNumber)) {
        alert('Введи число!');      
    } else {
      arr.push(userNumber);
      i++;                      
    };
    getCompare(userNumber);
  }
  alert('Попытки закончились');
}
  
  const n = +prompt('Введите нижнюю границу');
  const m = +prompt('Введите верхнюю границу');
  guessNumber(n, m);
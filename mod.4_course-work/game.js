  //Во всей игре false - четное, true - нечетное;

  // Ход игрока: чет,  ход бота: нечет;
  current = 1;

  const balls = {
      countPlayer: 5,
      countBot: 5,            
  };

    // Вывод информации о количестве шариков у игроков. Если число отрицательное, то выводим 0
    const getBallsCount = () => {
      if (balls.countPlayer < 0) {
        balls.countPlayer = 0;
      };
      if (balls.countBot < 0) {
        balls.countBot = 0};
      alert(`Количество шариков:\n________________________
    \nИгрок: ${balls.countPlayer}\nБот: ${balls.countBot}`);
  }   

  const arrNumber = ['четное', 'нечетное'];

  // Компьютерный рандом
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      const number = Math.floor(Math.random() * (max - min + 1)) + min;            
      console.log('bot:', number);
      return number;
  };   

  // Ход игры (первым ходит игрок)
  const playerGame = () => {
  const playerPrompt = +prompt(`Ход игрока\nВведи число от 1 до ${balls.countPlayer}`);   

    // Проверяем правильно ли введено число
    if (!Number.isInteger(playerPrompt) ||
      playerPrompt > balls.countPlayer ||
      playerPrompt <= 0) {
      return alert("Введи другое число");
      playerGame();
    }      

    // Приводим бота и игрока к булевому типу
    const player = !(playerPrompt % 2);       
    const bot = !getRandomInt(0, 1);
    
    if (bot === player) {
      alert('Бот угадал');
      balls.countPlayer -= playerPrompt;
      balls.countBot += playerPrompt;
    } else {
      alert('Бот не угадал');
      balls.countPlayer += playerPrompt;
      balls.countBot -= playerPrompt;
    }
  }        

  // Ход игры (первым ходит бот)
  const botGame = () => {
    const botNumber = getRandomInt(1, balls.countBot);    
    const player = confirm(`Бот загадал число\nУгадай, четное число?\n"ОК" - четное, "Отмена" - нечетное`);

    const bot = !(botNumber % 2); // Приводим бота к булевому типу
    
    if (player === bot) {
      alert('Игрок угадал');
      balls.countPlayer += botNumber;
      balls.countBot -= botNumber;
    } else {
      alert('Игрок не угадал');
      balls.countPlayer -= botNumber;
      balls.countBot += botNumber;
    }
  }
  
  // Запуск игры

  while (balls.countPlayer > 0 
    && balls.countBot > 0) {
      if (current % 2) {
      getBallsCount();          
      playerGame();        
      } else {
        getBallsCount();   
        botGame();        
      }
      current++;      
  }
  getBallsCount();
  alert('Конец игры')


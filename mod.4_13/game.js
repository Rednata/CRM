'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];


  // Рандомное слово
  const getRandomInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //
  };

  // Объект с результатами игры
  const result = {
    player: 0,
    computer: 0,
  };

  // Приведение возможно сокращенной формы загаданного слова к полному слову
  const playerFullWord = (str, arr) => arr.find(item => item[0] === str[0]);

  // Запуск игры
  const start = () => {
    const str = prompt('камень, ножницы, бумага?');
    const computerWord = FIGURES_RUS[getRandomInclusive(0, 2)];
  // Проверяем введенную пользователем информацию
    const incorrect = FIGURES_RUS.some(item => (item.includes(str.toLowerCase())));
    if (str === null) {
      alert('Точно хочешь выйти?');
      return alert(`Результат игры:
      \nКомпьютер:${result.computer}\nВы: ${result.player}`);
    } else if (!incorrect) {
      alert('Вводи правильно!');
      return start();
    } else {
      const playerWord = playerFullWord(str.toLowerCase(), FIGURES_RUS);
      game(playerWord, computerWord);
    }
  };

  // Игра
  function game(playerWord, computerWord) {
    const wordsGame =
    `Компьютер: ${computerWord}\nВы: ${playerWord}\n_________________`;
    if (playerWord === computerWord) {
      alert(`${wordsGame}\nНичья!`);
      return start();
    } else {
      const current = playerWord + computerWord;
      if (current === 'каменьножницы' ||
          current === 'ножницыбумага' ||
          current === 'бумагакамень') {
        alert(`${wordsGame}\nВы Выиграли!`);
        result.player += 1;
        return start();
      } else {
        alert(`${wordsGame}\nКомпьютер выиграл!`);
        result.computer += 1;
        return start();
      }
    }
  }

  window.gameStart = start;
})();

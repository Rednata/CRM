"use strict";

// Вторая задача:
console.log('Вторая задача:');
console.log();
const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!'); 
}

// Третья задача:
// console.log('Третья задача:');
// const math = +prompt('Введите кол-во баллов по математике:');
// const russian = +prompt('Введите кол-во баллов по русскому языку:');
// const informatics = +prompt('Введите кол-во баллов по информатике:');

// const sumAll = math + russian + informatics;
// if (sumAll >= 265) {
//   console.log('Поздравляю, вы поступили на бюджет!');
// } else {
//   console.log('Придется учиться на платной основе');
// }

// Четвёртая задача:
console.log('Четвёртая задача:');

const denomination = 100;

const money = prompt('Какую сумму хотите снять?');

if (money % 100 !== 0) {
  console.log(`Банкомат не может выдать сумму ${money} руб`);
} else {
  console.log('Можете получить наличные');
}




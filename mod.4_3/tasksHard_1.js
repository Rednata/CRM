"user strict";

// Первая задача 
console.log('Первая задача "tasksHard_1":');
const limit1 = 15000;
const limit2 = 20000;
const limit3 = 50000;
const income1 = +prompt('Введите сумму дохода для первой задачи:');
let tax1 = income1;

if (income1 <= limit1) {  
  tax1 *= 0.13;
} else if (income1 <= limit3) {
  tax1 *= 0.2;
} else {
  tax1 *= 0.3;
}

console.log(`Ваш налог по первой задаче составил: ${tax1} ₽`);


// Вторая  задача 
console.log('Вторая задача "tasksHard_2":');
const income2 = +prompt('Введите сумму дохода для второй задачи:');
let tax2 = income2;

if (income2 <= limit1) {  
  tax2 *= 0.13;
} else if (income2 <= limit3) {
  tax2 = (tax2 - limit1) * 0.2;
} else {
  tax2 = (tax2 - limit3) * 0.3;
}
console.log(`Ваш налог по второй задаче составил: ${tax2} ₽`);
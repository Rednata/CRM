"use strict";

let nameProduct = "диван";
let quantity = 5;
let category = "угловой";
let price = 5000;

// console.log("Наименование товара:", nameProduct);
// console.log("Сумма товара:", quantity*price);

nameProduct = prompt('Введите наименование товара');
quantity = prompt('Введите количество товара');
price = prompt('Введите категорию товара');

console.log(typeof quantity);
console.log(typeof price);

console.log(`На складе ${quantity} единицы товара "${nameProduct}" на сумму ${quantity * price} деревянных`);

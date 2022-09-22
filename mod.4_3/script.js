"use strict";

const nameProduct = prompt('Введите наименование товара', "диван");
const quantity = +prompt('Введите количество товара', 5);
const category = prompt('Введите категорию товара', "угловой");
const price = +prompt('Введите стоимость товара', 5000);

console.log(typeof quantity);
console.log(typeof price);

console.log(`На складе ${quantity}ед. товара "${nameProduct}" на сумму ${quantity * price} деревянных`);

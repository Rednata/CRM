"use strict";

// Первая задача

const nameProduct = prompt('Введите наименование товара', "диван");
const quantity = +prompt('Введите количество товара', 5);
const category = prompt('Введите категорию товара', "угловой");
const price = +prompt('Введите стоимость товара', 5000);

if ( (!quantity) || (!price) ) {
  console.log("Вы ввели некорректные данные");
} else if ( (typeof quantity !== 'number') || (typeof price !== 'number') ) {
  console.log("Вы ввели некорректные данные");
} else {
  console.log(`На складе ${quantity}ед. товара "${nameProduct}" на сумму ${+quantity * +price} деревянных`);
};


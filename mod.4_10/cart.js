'use strict';

const cart =
  {
    items: [],
    count: 0,
    get totalPrice() {
      return this.calculateItemPrice(this.items);
    },

    calculateItemPrice(items) {
      let sum = 0;
      for (const i of items) {
        sum += i.priceItem * i.countItem;
      }
      return sum;
    },

    increaseCount(newCount) {
      this.count += newCount;
    },
    add(nameItem, priceItem, countItem = 1) {
      const item = {
        nameItem,
        priceItem,
        countItem,
      };
      cart.items.push(item);
      this.increaseCount(countItem);
    },
    clear() {
      this.totalPrice = 0;
      this.count = 0;
      this.items = [];
    },
    print() {
      const cartStr = JSON.stringify(cart);
      console.log(cartStr);
    },
  };

cart.add('хлеб', 20);
cart.add('сахар', 80, 2);
cart.add('яблоки', 150, 2);

console.log(cart.totalPrice);

cart.print();

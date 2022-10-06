'use strict';

const cart =
  {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
      return this.totalPrice;
    },
    calculateItemPrice(price, count) {
      this.totalPrice += price * count;
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
      this.calculateItemPrice(priceItem, countItem);
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

cart.print();

'use strict';

const cart =
  {
    items: [],
    count: 0,
    discount: 0,
    get totalPrice() {
      return this.calculateItemPrice(this.items);
    },
    set setDiscount(promocode) {
      if (promocode === 'METHED') {
        this.discount = 15;
      } else if (promocode === 'NEWYEAR') {
        this.discount = 21;
      }
    },
    calculateItemPrice(items) {
      const sum = items.reduce((acc, {priceItem, countItem}) => {
        const res = acc + priceItem * countItem;
        return res;
      }, 0);
      return sum - sum * (this.discount / 100);
    },
    increaseCount(newCount) {
      this.count += newCount;
    },
    add(nameItem, priceItem, countItem = 1) {
      cart.items.push({nameItem, priceItem, countItem});
      this.increaseCount(countItem);
    },
    clear() {
      this.totalPrice = 0;
      this.count = 0;
      this.items = [];
    },
    print() {
      const cartStr = JSON.stringify(this);
      console.log(cartStr);
    },
  };

cart.add('хлеб', 20);
cart.add('сахар', 80, 2);
cart.add('яблоки', 150, 2);
cart.setDiscount = 'NEWYEAR';
console.log(cart.totalPrice);

cart.print();

export class Reservation {
  constructor({ id, userId, date, TableId, num, host }) {
    this.id = id;
    this.userId = userId;
    this.date = date;
    this.TableId = TableId;
    this.num = num;
    this.host = host;
  }
}

export class Table {
  constructor({ id, min, max }) {
    this.id = id;
    this.min = min;
    this.max = max;
  }
}

export class Food {
  constructor({ id, title, price, ingredients }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.ingredients = ingredients;
  }
}

export class Order {
  constructor({ id, userId, time, address, price }) {
    this.id = id;
    this.userId = userId;
    this.time = time;
    this.address = address;
    this.price = price;
  }
}

export class OrderItem {
  constructor({ orderId, foodId, count }) {
    this.orderId = orderId;
    this.foodId = foodId;
    this.count = count;
  }
}

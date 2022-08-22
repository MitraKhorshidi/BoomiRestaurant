import { Op } from "sequelize";
import { Food, Order, Reservation } from "./common";
import { fixDate, phoneValid } from "./utility";

export const ReservationRepository = {
  async newReservation({ userId, date, num, host, TableId }) {
    const { database } = await import("./database");

    date = fixDate(date);
    if (date.getTime() < new Date().getTime()) {
      throw new Error("Cannot pick a date from past.");
    }
    if (date.getTime() > (new Date().getTime() + 1000 * 60 * 60 * 24 * 7)) {
      throw new Error("Cannot pick a date after a week");
    }

    if (!phoneValid(userId)) throw new Error("phone number is not true");

    const table = await database.TableModel.findByPk(TableId);

    if (!table) throw new Error("this table is not exists");

    if (num < table.min || num > table.max) {
      throw new Error(
        "Number of people should be between " + table.min + " and " + table.max,
      );
    }

    const prevReserv = await database.ReservationModel.findOne({
      where: { [Op.and]: [{ TableId: TableId }, { date: date }] },
    });
    if (prevReserv) {
      throw new Error("This table has been booked.");
    }

    const reservation = await database.ReservationModel.create({
      userId,
      date,
      num,
      host: host == "Yes",
      TableId,
    });
    return new Reservation(reservation);
  },

  async searchReservation({ reservationId, userId }) {
    const { database } = await import("./database");
    
    const reservation = await database.ReservationModel.findByPk(reservationId);
    if (!reservation || reservation.userId != userId) {
      throw new Error("This reservation is not exist!");
    }

    return new Reservation(reservation);
  },

  async editReservation({ reservationId, userId, date, num, host, tableId }) {
    const { database } = await import("./database");
    
    const reservation = await database.ReservationModel.findByPk(reservationId);
    if (!reservation || !reservation.userId == userId) {
      throw new Error("This reservation not exist!");
    }

    if (!phoneValid(userId)) throw new Error("phone number is not true");

    const table = await database.TableModel.findByPk(tableId);

    if (!table) throw new Error("this table is not exists");

    if (num <= table.min || num >= table.max) {
      throw new Error(
        "Number of people should be between " + table.min + " and " + table.max,
      );
    }

    const prevReserv = await database.ReservationModel.findOne({
      where: { [Op.and]: [{ TableId: tableId }, { date: date }] },
    });
    if (prevReserv) {
      throw new Error("This table has been booked.");
    }

    reservation.set({ date, num, host, tableId });
    await reservation.save();

    return new Reservation(reservation);
  },

  async deleteReservation({ reservationId, userId }) {
    const { database } = await import("./database");
    
    const reservation = await database.ReservationModel.findByPk(reservationId);
    if (!reservation || reservation.userId != userId) {
      throw new Error("This reservation is not exist");
    }

    await reservation.destroy();
    return true;
    //succuss proccess
  },
};

export const OrderRepository = {
  async newOrder({ userId, address, shoppigCart }) {
    const { database } = await import("./database");
    const order = await database.OrderModel.create({ userId, address, price:0 });
    
    let price=0;

    for(let foodID in shoppigCart){
      const count = shoppigCart[foodID];
      if(count<=0 || count>25) continue;
      const food =await database.FoodModel.findByPk(foodID);
      if(!food) continue;
      price=price+count*food.price;
      await order.addFood(food, { through: { count: count} });
    }

    order.price=price;
    await order.save();

    return new Order({id:order.id , address:order.address , userId:order.userId , price:order.price , time : order.createdAt});
  },
};

export const FoodRepository = {
  async list() {
    const { database } = await import("./database");
    const list = await database.FoodModel.findAll();
    return list.map((item) => new Food(item));
  },
};

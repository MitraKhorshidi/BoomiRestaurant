import { Op } from "sequelize";
import { Food, Reservation } from "./common.js";
import { fixDate, phoneValid } from "./utility.js";
import {
  foodModel,
  orderItemModel,
  orderModel,
  reservationModel,
  tableModel,
} from "./database.js";

export const ReservationRepository = {
  async newReservation({ userId, date, num, host, TableId }) {
    date = fixDate(date);
    if (date.getTime() < new Date().getTime()) {
      throw new Error("Cannot pick a date from past.");
    }
    if (date.getTime() > (new Date().getTime() + 1000 * 60 * 60 * 24 * 7)) {
      throw new Error("Cannot pick a date after a week");
    }

    if (!phoneValid(userId)) throw new Error("phone number is not true");

    const table = await tableModel.findByPk(TableId);

    if (!table) throw new Error("this table is not exists");

    if (num < table.min || num > table.max) {
      throw new Error(
        "Number of people should be between " + table.min + " and " + table.max,
      );
    }

    const prevReserv = await reservationModel.findOne({
      where: { [Op.and]: [{ TableId: TableId }, { date: date }] },
    });
    if (prevReserv) {
      throw new Error("This table has been booked.");
    }

    const reservation = await reservationModel.create({
      userId,
      date,
      num,
      host: host == "Yes",
      TableId,
    });
    return new Reservation(reservation);
  },

  async searchReservation({ reservationId, userId }) {
    const reservation = await reservationModel.findByPk(reservationId);
    if (!reservation || reservation.userId != userId) {
      throw new Error("This reservation is not exist!");
    }
    return new Reservation(reservation);
  },

  async editReservation({ reservationId, userId, date, num, host, tableId }) {
    const reservation = await reservationModel.findByPk(reservationId);
    if (!reservation || !reservation.userId == userId) {
      throw new Error("This reservation not exist!");
    }

    if (!phoneValid(userId)) throw new Error("phone number is not true");

    const table = await tableModel.findByPk(tableId);

    if (!table) throw new Error("this table is not exists");

    if (num <= table.min || num >= table.max) {
      throw new Error(
        "Number of people should be between " + table.min + " and " + table.max,
      );
    }

    const prevReserv = await reservationModel.findOne({
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
    const reservation = await reservationModel.findByPk(reservationId);
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
    const order = await orderModel.create({ userId, address, price });
    //orderitem??
  },
};

export const FoodRepository = {
  async list() {
    const list = await foodModel.findAll();
    return list.map((item) => new Food(item));
  },
};

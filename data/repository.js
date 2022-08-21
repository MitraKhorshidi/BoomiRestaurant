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

const foods = [
  {
    id: 1,
    title: "Beef Stroganoff",
    ingredients: "Veal fillet with mushroom sauce and vegtables",
    price: 68,
  },
  {
    id: 2,
    title: "Cheese Burger ",
    ingredients: "Lamb,lettuce,tomato,pickled cucumber,onion,bread,cheese",
    price: 150,
  },
  {
    id: 3,
    title: "Chicken Stroganoff",
    ingredients: "chicken with mushroom sauce and vegtables",
    price: 90,
  },
  {
    id: 4,
    title: "Steak",
    ingredients: "Veal fillet with mushroom sauce and vegtables ",
    price: 160,
  },
  {
    id: 5,
    title: "Pasta Alfredo",
    ingredients: "Pasta with cream sauce",
    price: 60,
  },
  {
    id: 6,
    title: "Pasta Napolitan",
    ingredients: "Pasta with tomato sauce and chicken fiilet",
    price: 70,
  },
  {
    id: 7,
    title: "Lasagna",
    ingredients: "Lasagna with tomato sauce,minced meat and cheeses",
    price: 111,
  },
  {
    id: 8,
    title: "Chelo Kabab Soltani",
    ingredients: "lamb kebab with persian rice and chicken kebab",
    price: 140,
  },
  {
    id: 9,
    title: "Chelo Kabab Barg",
    ingredients: "lamb kebab with persian rice and tomato kebab with salad",
    price: 130,
  },
  {
    id: 10,
    title: "Chelo Chicken Kebab",
    ingredients: "Chicken kebab with persian rice and tomato kebab",
    price: 111,
  },
  {
    id: 11,
    title: "Barberry Rice with Chicken",
    ingredients: "Barberry Rice with Chicken and tomato sauce",
    price: 70,
  },
  {
    id: 12,
    title: "Tahchin",
    ingredients: "Rice with chicken and yogourt ",
    price: 111,
  },
];

const tables = [
  { id: 1, min: 2, max: 4 },
  { id: 2, min: 2, max: 4 },
  { id: 3, min: 2, max: 4 },
  { id: 4, min: 1, max: 3 },
  { id: 5, min: 1, max: 3 },
  { id: 6, min: 1, max: 3 },
  { id: 7, min: 2, max: 4 },
  { id: 8, min: 2, max: 4 },
  { id: 9, min: 1, max: 2 },
  { id: 10, min: 2, max: 4 },
  { id: 11, min: 2, max: 4 },
  { id: 12, min: 2, max: 4 },
  { id: 13, min: 2, max: 4 },
  { id: 14, min: 1, max: 3 },
  { id: 15, min: 5, max: 8 },
];

async function fillFoodDB() {
  for (let food of foods) {
    await foodModel.create(food);
  }
}

async function fillTableDB() {
  for (let table of tables) {
    await tableModel.create(table);
  }
}
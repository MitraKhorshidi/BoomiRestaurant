import { DataTypes, Sequelize } from "sequelize";
import * as pg from "pg";

console.info("info - DB_URL", process.env.DB_URL);

export const database = new Sequelize(process.env.DB_URL, {
  dialectModule: pg,
});

const TableModel = database.TableModel = database.define("Table", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  min: DataTypes.INTEGER,
  max: DataTypes.INTEGER,
});

const ReservationModel = database.ReservationModel = database.define("Reservation", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  num: DataTypes.INTEGER,
  host: DataTypes.BOOLEAN,
});

const FoodModel = database.FoodModel = database.define("Food", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  ingredients: DataTypes.STRING,
  price: DataTypes.INTEGER,
});

const OrderModel = database.OrderModel = database.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: DataTypes.INTEGER,
  address: DataTypes.STRING,
  price: DataTypes.INTEGER,
});

const OrderItemModel = database.OrderItemModel = database.define("OrderItem", {
  count: DataTypes.INTEGER,
});
    
TableModel.hasMany(ReservationModel);
ReservationModel.belongsTo(TableModel);

OrderModel.belongsToMany(FoodModel, { through: OrderItemModel });
FoodModel.belongsToMany(OrderModel, { through: OrderItemModel });    

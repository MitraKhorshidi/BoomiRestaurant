import { DataTypes, Sequelize } from "sequelize";

const CONFIGS = {
  development: {
    dialect: "sqlite",
    storage: process.env.DB_PATH,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
};

console.log(process.env.NODE_ENV, CONFIGS[process.env.NODE_ENV]);

export const myDatabase = new Sequelize(CONFIGS[process.env.NODE_ENV]);

export const tableModel = myDatabase.define("Table", {
  min: { type: DataTypes.NUMBER },
  max: { type: DataTypes.NUMBER },
});

export const reservationModel = myDatabase.define("Reservation", {
  userId: { type: DataTypes.NUMBER },
  date: { type: DataTypes.DATE },
  num: { type: DataTypes.NUMBER },
  host: { type: DataTypes.BOOLEAN },
});

tableModel.hasMany(reservationModel);
reservationModel.belongsTo(tableModel);

export const foodModel = myDatabase.define("Food", {
  title: { type: DataTypes.STRING },
  ingredients: { type: DataTypes.STRING },
  price: { type: DataTypes.NUMBER },
});

export const orderModel = myDatabase.define("Order", {
  userId: { type: DataTypes.NUMBER },
  address: { type: DataTypes.STRING },
  price: { type: DataTypes.NUMBER },
});

export const orderItemModel = myDatabase.define("OrderItem", {
  count: { type: DataTypes.NUMBER },
});

orderModel.belongsToMany(foodModel, { through: orderItemModel });
foodModel.belongsToMany(orderModel, { through: orderItemModel });

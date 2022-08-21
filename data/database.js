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

const ENV ="development"; //process.env.NODE_ENV;
console.log("ENV", ENV, CONFIGS[ENV]);
export const myDatabase = new Sequelize(CONFIGS[ENV]);

export const tableModel = myDatabase.define("Table", {
  min: { type: DataTypes.INTEGER },
  max: { type: DataTypes.INTEGER },
});

export const reservationModel = myDatabase.define("Reservation", {
  userId: { type: DataTypes.INTEGER },
  date: { type: DataTypes.DATE },
  num: { type: DataTypes.INTEGER },
  host: { type: DataTypes.BOOLEAN },
});

tableModel.hasMany(reservationModel);
reservationModel.belongsTo(tableModel);

export const foodModel = myDatabase.define("Food", {
  title: { type: DataTypes.STRING },
  ingredients: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
});

export const orderModel = myDatabase.define("Order", {
  userId: { type: DataTypes.INTEGER },
  address: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
});

export const orderItemModel = myDatabase.define("OrderItem", {
  count: { type: DataTypes.INTEGER },
});

orderModel.belongsToMany(foodModel, { through: orderItemModel });
foodModel.belongsToMany(orderModel, { through: orderItemModel });

import { Sequelize, Model, DataTypes } from 'sequelize';

// const myDatabase =new Sequelize('sqlite::D:\\University\\project\\boomi-restaurant\\data\\db-test.sqlite');

const myDatabase = new Sequelize({
    dialect: 'sqlite',
    storage: 'D:\\University\\project\\boomi-restaurant\\data\\db-test.sqlite'
  });

const foodModel = myDatabase.define('Food' , {
    name:{type:DataTypes.STRING},
    price:{type:DataTypes.NUMBER},
});

const orderModel= myDatabase.define('Order' ,{
    address:{type:DataTypes.STRING},
});

const orderItemModel =myDatabase.define('orderItem' ,{
    count:{type:DataTypes.NUMBER},
});

orderModel.belongsToMany(foodModel , {through : orderItemModel });
foodModel.belongsToMany(orderModel , {through : orderItemModel});

await myDatabase.sync();
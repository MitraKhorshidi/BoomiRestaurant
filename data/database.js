import { Sequelize, Model, DataTypes } from 'sequelize';
import Reservation from './reservation.js';
import Food from './food.js';

const myDatabase =new Sequelize({
    dialect: 'sqlite',
    storage: 'D:\\University\\project\\boomi-restaurant\\data\\db.sqlite',
});

const tableModel =myDatabase.define('Table' , {
    min:{type:DataTypes.NUMBER},
    max:{type:DataTypes.NUMBER},
});

const reservationModel = myDatabase.define('Reservation' , {
    userId:{type:DataTypes.NUMBER},
    date:{type:DataTypes.DATE},
    num:{type:DataTypes.NUMBER},
    host:{type:DataTypes.BOOLEAN},
});


tableModel.hasMany(reservationModel);
reservationModel.belongsTo(tableModel);


const foodModel = myDatabase.define( 'Food' , {
    title:{type:DataTypes.STRING},
    ingredient:{type:DataTypes.STRING},
    price:{type:DataTypes.NUMBER},
});

const orderModel = myDatabase.define('Oreder' , {
    userId:{type:DataTypes.NUMBER},
    time:{type:DataTypes.TIME},
    address:{type:DataTypes.STRING},
    price:{type:DataTypes.NUMBER},
});

const orderItemModel = myDatabase.define('OrderItem' , {
    count:{type:DataTypes.NUMBER},
});


orderModel.belongsToMany(foodModel , {through : orderItemModel });
foodModel.belongsToMany(orderModel , {through : orderItemModel});


export const FoodRepository = {
    async list(){
        const list =await foodModel.findAll({attributes:['TableId' , 'min' ,'max']});
        return list.map(item => new Food(item)) ;
    }
}

export const ReservationRepository={
    async newReservation({userId , date , num , host , tableId}){
        const table = await tableModel.findByPk(tableId);
        if(num<=table.min || num>=table.max){
            return ('Number of people should be between '+table.min+' and '+table.max);
        }
        const reserved = await reservationModel.findOne({where:{[Op.and]:[{TableId:tableId},{date:date}]}})
        if(reserved){
            return('This table has been booked.');
        }
        //if userId,tableid valid
        // if not table free at date return error
        const reservation = await reservationModel.create({userId,date,num,host,tableId});
        return new Reservation(reservation);
        
    },

    async editReservation({reservationId,userId,date,num,host,tableId}){
        //validation
        //if table is free 
        const reservation = await reservationModel.findByPk(reservationId);
        if(!reservation || reservation.userId==userId){
            return 0;//error
        }
        reservation.set({date,num,host,tableId,})
        await reservation.save();
        return new Reservation(reservation);
    },

    async deleteReservation({reservationId,userId}){
        const reservation =await reservationModel.findByPk(reservationId);
        if(!reservation || reservation.userId!=userId){
            return 0; 
            //error
        }
        await reservation.destroy();
        return 1;
        //succuss proccess
    },
}


export const OrderRepository = {
    async newOrder({userId,time,address,price}){
        const order =await orderModel.create({userId,time,address,price});
        //orderitem??
    },
}





myDatabase.sync()
.then(()=>{console.log('hello')})
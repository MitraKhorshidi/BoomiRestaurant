export default class Reservation{
    constructor({id,userId,date,tableId,num,host}){
        this.id=id;
        this.userId=userId;
        this.date=date;
        this.tableId=tableId;
        this.num=num;
        this.host=host;
    }
}
export default class Reservation{
    constructor({id,userId,date,TableId,num,host}){
        this.id=id;
        this.userId=userId;
        this.date=date;
        this.TableId=TableId;
        this.num=num;
        this.host=host;
    }
}
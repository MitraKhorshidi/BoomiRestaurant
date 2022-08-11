import '../../data/database.js';
import { ReservationRepository } from '../../data/database.js';

export default async function handler(req, res) {

  try{
    const data = JSON.parse(req.body);
    const reservation = await ReservationRepository.searchReservation(data);
    res.status(200).json({reservation_number : reservation.id , tableId:reservation.TableId , userId:reservation.userId , date:reservation.date ,num:reservation.num})
  }
  catch(error){
    res.status(500).send(error.message)
  }

}

import '../../data/database.js';
import { ReservationRepository } from '../../data/database.js';

export default async function handler(req, res) {

  const data =JSON.parse( req.body);
  const reservation = await ReservationRepository.newReservation(data);
  if(!reservation){
    return 0;//error
  }
  res.status(200).json({reservation_number : reservation.id})

}

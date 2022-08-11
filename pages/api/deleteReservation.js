import '../../data/database.js';
import { ReservationRepository } from '../../data/database.js';

export default async function handler(req, res) {

  try{
    const data = JSON.parse(req.body);
    const result = await ReservationRepository.deleteReservation(data);
    res.status(200).json({result : result})
  }
  catch(error){
    res.status(500).send(error.message)
  }

}

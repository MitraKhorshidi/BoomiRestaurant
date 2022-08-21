import { ReservationRepository } from "/data/repository";

export default async function handler(req, res) {
  try {
    const data = JSON.parse(req.body);
    const reservation = await ReservationRepository.searchReservation(data);
    res.status(200).json({ ...reservation });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

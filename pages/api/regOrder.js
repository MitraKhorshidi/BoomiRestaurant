import { OrderRepository } from "/data/repository";

export default async function handler(req, res) {
  try {
    const data = JSON.parse(req.body);
    const order = await OrderRepository.newOrder(data);
    res.status(200).json({ ...order });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

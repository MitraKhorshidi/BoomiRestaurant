import { FoodRepository } from "/data/repository";

export default async function handler(req, res) {
  try {
    res.status(200).json({ data:await FoodRepository.list() });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

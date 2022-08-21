import { fillFoodDB, fillTableDB } from "../../data/repository";
import { myDatabase } from "/data/database";

export default async function handler(req, res) {
  try {    
    await myDatabase.sync();
    await fillFoodDB();
    await fillTableDB();

    res.status(200).json({ result: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

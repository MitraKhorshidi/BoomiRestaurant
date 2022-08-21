import { myDatabase } from "/data/database";
import { fillFoodDB, fillTableDB } from "/data/initial-data";

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

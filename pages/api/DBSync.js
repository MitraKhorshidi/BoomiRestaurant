
export default async function handler(req, res) {
  const { database } = await import('/data/database');
  const { fillFoodDB, fillTableDB } = await import('/data/initial-data');
  try {
    await database.drop();
    await database.sync({ force:true });
    await fillFoodDB(database);
    await fillTableDB(database);

    res.status(200).json({ result: true });
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

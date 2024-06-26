const { MongoClient, ObjectId } = require("mongodb");

//the connection string here onli for study
const url =
  "mongodb+srv://or0548096690:Adik%401411@cluster0.tc4lfzu.mongodb.net/";
const dbName = "techersApp";

const client = new MongoClient(url);

let dbConnection = null;

async function connectDb() {
  try {
    if (dbConnection) return dbConnection;
    await client.connect();
    console.log("Connected to DB😎");
    dbConnection = client.db(dbName);
    return dbConnection;
  } catch (error) {
    console.error("Connection to DB failed:", error);
    throw error;
  }
}

async function getCollection(collectionName) {
  try {
    const db = await connectDb();
    const collection = db.collection(collectionName);
    return collection;
  } catch (error) {
    console.error("Error getting collection:", error);
    throw error;
  }
}

function toObjectId(id) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid ObjectId: ", id);
  }
  return new ObjectId(id);
}

module.exports = { getCollection, toObjectId };

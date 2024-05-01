"use strict";
const { getCollection, toObjectId } = require("./dbModules");

const entity = "curses";

async function getcurse() {
  try {
    const collection = await getCollection(entity);
    const techers = await collection.find({}).sort().toArray();

    return techers;
  } catch (error) {
    console.log(error);
  }
}

async function addCurse(fullName, students, startYear) {
  try {
    const collection = await getCollection(entity);
    const existcurse = await collection.findOne({ fullName });
    if (existTecher) {
      throw new Error("The curse is already exist😢");
    }
    await collection.insertOne({
      fullName,
      students,
      startYear,
    });
    console.log(`curse "${fullName}" have been added successfully`);
  } catch (error) {
    throw error;
  }
}

module.exports = { addCurse, getcurse };

require("dotenv").config({ path: ".env.test" });
process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const connectDB = require("../src/config/db");

const setupTestDb = async () => {
  await connectDB();

  // Optional: Clear all collections
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany();
  }

  console.log(" Test DB is ready.");
  process.exit();
};

setupTestDb();

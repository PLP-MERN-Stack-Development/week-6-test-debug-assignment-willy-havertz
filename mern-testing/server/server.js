require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use("/auth", require("./routes/auth"));

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to DB");
  app.listen(5000, () => console.log("Server running"));
});

module.exports = app;

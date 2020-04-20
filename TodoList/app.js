const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/todo"));

// const dbRoute = process.env.MONGOURI;

// mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });

// let db = mongoose.connection;

// db.once("open", () => console.log("connected to the database"));
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

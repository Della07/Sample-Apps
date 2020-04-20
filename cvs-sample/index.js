const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CSV = require("./models/csv");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => {
    err => console.log(err);
  });

app.get("/", async (req, res) => {
  //   let i;
  //   for (i = 0; i <= 10000; i++) {
  //     const cvsData = new CSV({
  //       actor: "admin",
  //       event: "login",
  //       description: "login on page"
  //     });

  //     await cvsData.save().then(err => {
  //       console.log(cvsData);
  //       return err;
  //     });
  //   }
  //   const cvsData = new CSV({
  //     actor: "admin",
  //     event: "login",
  //     description: "login on page"
  //   });

  //   await cvsData.save().then(err => {
  //     console.log(cvsData);
  //     return err;
  //   });

  await CSV.find({}, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    console.log("data retreive", data);
    return res.json({ success: true, data: data });
  });
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // id: Number,
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  contact: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("Users", userSchema);

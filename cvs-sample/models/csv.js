const mongoose = require("mongoose");

const csvSchema = mongoose.Schema({
  actor: { type: String },
  event: { type: String },
  description: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CSV", csvSchema);

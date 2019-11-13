const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Symbol: {
    type: String,
    required: true,
    unique: true
  },
  Sector: String
});

module.exports = mongoose.model("Index", stockSchema);

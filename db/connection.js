const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/stocks", { useNewUrlParser: true });

module.exports = mongoose;

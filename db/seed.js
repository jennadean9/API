const Index = require("../models/StockIndex.js");
const data = require("./stockIndex.json");

Index.remove({}).then(() => {
  Index.create(data)
    .then(index => {
      console.log(index);
      process.exit();
    })
    .catch(err => {
      console.log(err);
      process.exit();
    });
});

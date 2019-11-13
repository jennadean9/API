const Index = require("../models/stockIndex.js");
const stockInfo = require("./stockInfo.json");

Index.remove({}).then(() => {
  Index.create(stockInfo)
    .then(index => {
      console.log(index);
      process.exit();
    })
    .catch(err => {
      console.log(err);
      process.exit();
    });
});

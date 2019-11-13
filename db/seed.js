const Index = require("../models/stockIndex.js");
const data = require("./stockIndex.json");

const stockData = data.map(item => {
  const company = {};
  company.name = item.name;
  company.symbol = item.symbol;
  company.sector = item.sector;
  return company;
});

console.log(stockData);

Index.remove({}).then(() => {
  Index.create(stockData)
    .then(index => {
      console.log(index);
      process.exit();
    })
    .catch(err => {
      console.log(err);
      process.exit();
    });
});

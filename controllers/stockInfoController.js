const Index = require("../models/StockIndex.js");

const stockInfoController = {
  index: (req, res) => {
    Index.find({}).then(indexes => {
      res.json(indexes);
    });
  },
  showId: (req, res) => {
    Index.findOne({ _id: req.params.id }).then(index => {
      res.json(index);
    });
  },
  showSymbol: (req, res) => {
    Index.findOne({ Symbol: req.params.symbol }).then(index => {
      res.json(index);
    });
  },
  showName: (req, res) => {
    Index.findOne({ Name: req.params.name }).then(index => {
      res.json(index);
    });
  },
  create: (req, res) => {
    Index.create(req.body).then(index => {
      res.json(index);
    });
  },
  edit: (req, res) => {
    Index.findOneAndUpdate({ Symbol: req.params.symbol }, req.body, {
      new: true
    }).then(index => {
      res.json(index);
    });
  },
  delete: (req, res) => {
    Index.findOneAndDelete({ Symbol: req.params.symbol }).then(index => {
      res.json(index);
    });
  }
};

module.exports = stockInfoController;

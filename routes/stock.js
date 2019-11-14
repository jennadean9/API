const express = require("express");
const expRouter = express.Router();

expRouter.use(require("./stockIndex"));

module.exports = expRouter;

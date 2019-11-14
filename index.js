const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(require("./routes/stock.js"));

app.listen(4000, () => console.log("listening on port 4000"));

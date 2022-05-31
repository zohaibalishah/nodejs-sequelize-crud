const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const sequelize = require("./config/db");
sequelize.authenticate().then(() => {
  console.log("db connected");
});

require("./models/products");
app.use(bodyParser());
app.use("/api/products", require("./routes/products"));
app.listen(4000, () => {
  console.log("server is running");
});

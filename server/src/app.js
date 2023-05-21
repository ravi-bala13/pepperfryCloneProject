const express = require("express");
const cors = require("cors");

const userController = require("./controllers/users.controller");
const productController = require("./controllers/products.controller");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/health-check", (req, res) => {
  return res.status(200).send("working fine");
});

app.use("/products", productController);

app.use("/users", userController);

module.exports = app;

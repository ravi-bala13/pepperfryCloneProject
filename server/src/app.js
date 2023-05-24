const express = require("express");
const cors = require("cors");

const loginController = require("./controllers/login.controller");
const productController = require("./controllers/products.controller");
const cartController = require("./controllers/cart.controller");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health-check", (req, res) => {
  return res.status(200).send("working fine");
});

app.use("/products", productController);
app.use("/users", loginController);
app.use("/cart", cartController);

module.exports = app;

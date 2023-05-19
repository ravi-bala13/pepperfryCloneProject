const express = require("express");

const router = express.Router();

const Product = require("../models/products.model");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();

    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;

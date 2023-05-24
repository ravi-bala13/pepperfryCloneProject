const express = require("express");

const Cart = require("../models/cart.model");
const { reverseToken } = require("../utils/jwtUtils");
const router = express.Router();

// Get a cart by ID
router.get("/:token", async (req, res) => {
  try {
    const token = req.params.token;
    const userDetails = reverseToken(token);
    const id = userDetails._id;
    const cart = await Cart.findOne({ userId: id }).populate("products");

    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
    } else {
      res.status(200).json(cart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// Add a product to a cart
router.post("/:token", async (req, res) => {
  try {
    const token = req.params.token;
    console.log(reverseToken(token));
    const userDetails = reverseToken(token);
    const id = userDetails._id;
    console.log("id:", id);
    const productId = req.body._id;
    console.log("productId:", productId);

    const result = await Cart.findOneAndUpdate(
      { userId: id },
      { $push: { products: productId } },
      { new: true }
    );
    console.log("result:", result);
    const message = result
      ? "Item added to cart successfully"
      : "some thing wrong";
    res.status(200).json({ message: message });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// Remove a product from a cart
router.post("/:token", async (req, res) => {
  try {
    const token = req.params.token;
    const userDetails = reverseToken(token);
    const id = userDetails._id;
    const productId = req.body._id;
    const result = await Cart.findOneAndUpdate(
      { userId: id },
      { $pull: { products: productId } },
      { new: true }
    );
    const message = result
      ? "Item added to cart successfully"
      : "some thing wrong";
    res.status(200).json({ message: message });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;

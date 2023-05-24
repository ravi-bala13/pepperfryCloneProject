const express = require("express");
require("dotenv").config();
const router = express.Router();

const User = require("../models/users.model");
const Cart = require("../models/cart.model");

const { newToken } = require("../utils/jwtUtils");

// for geting register details from pepperfry
router.post("/signup", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.umail }).lean().exec();

    // if it already exists then throw an error
    if (user) {
      const message = "email already exist please use another one";
      return res.status(409).json({ message: message, status: "Failed" });
    }
    user = await User.create({
      name: req.body.uname,
      mobile: req.body.unumber,
      email: req.body.umail,
      password: req.body.upassword,
    });

    // Create a cart instance for a new user and save it to the database
    const cart = new Cart({
      userId: user._id,
    });
    const result = await cart.save();
    console.log("cart saved successfully", result);

    const token = newToken(user);
    const message = "successfully created";

    logined_user_name = req.body.uname;
    logined_user_mobile = req.body.unumber;
    console.log(logined_user_name, logined_user_mobile);
    return res
      .status(200)
      .json({ message: message, name: user.name, token: token });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    // check if the email address provided already exist
    let user = await User.findOne({ email: req.body.umail });
    // if it does not exist then throw an error
    if (!user) {
      const message = "There is no account with this email";
      return res.status(400).json({ message: message, status: "Failed" });
    }

    // else we match the password
    const match = await user.checkPassword(req.body.upassword);

    // if not match then throw an error
    if (!match) {
      const message = "email or password is wrong";
      return res.status(400).json({ message: message, status: "Failed" });
    }

    const token = newToken(user);
    const message = "login successfully";

    logined_user_name = user.name;
    logined_user_mobile = user.mobile;
    return res
      .status(200)
      .json({ message: message, name: user.name, token: token });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;

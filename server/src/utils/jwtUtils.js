require("dotenv").config();
const jwt = require("jsonwebtoken");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

const reverseToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_KEY);
    return decoded.user;
  } catch (error) {
    // Handle token verification error
    console.error("Token verification failed:", error);
    return null;
  }
};

module.exports = { newToken, reverseToken };

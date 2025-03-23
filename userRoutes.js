const express = require("express");
const User = require("../Models/user");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware"); // Ensure user is authenticated


// Get logged-in user details
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("name email");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

module.exports = router;

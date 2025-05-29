const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("./User"); // Import the User model
require("dotenv").config();

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Signup Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    user = await User.create({ name, email, password: hashedPassword });

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send response
    res.json({ token, user: { id: user.id, name, email } });
  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Login Route (Fixed the route name from "/signup" to "/login")
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send response
    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Google Login Route - Unified route to handle both login and signup via Google
router.post("/google", async (req, res) => {
  const { token } = req.body; // Match the frontend parameter name

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email_verified, email, name, picture } = ticket.getPayload();

    if (!email_verified) {
      return res.status(400).json({ msg: "Email not verified by Google" });
    }

    let user = await User.findOne({ where: { email } });
    if (!user) {
      // Create new user if they don't exist
      user = await User.create({
        name: name || email.split("@")[0], // Use name from Google or create from email
        email,
        password: "", // Empty password for Google auth users
        profilePicture: picture || null,
      });
    }

    const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      token: jwtToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture || picture || null,
      },
    });
  } catch (err) {
    console.error("Error in Google authentication:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

module.exports = router;

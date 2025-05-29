const express = require("express");
const router = express.Router();
const db = require("../config/db"); // Import DB connection

// Route to verify payment
router.post("/verify", async (req, res) => {
  try {
    const { userId, transactionId } = req.body;

    if (!transactionId) {
      return res
        .status(400)
        .json({ success: false, message: "Transaction ID is required." });
    }

    // Store transaction details in DB (Manual Verification)
    await db.query(
      "INSERT INTO payments (user_id, transaction_id, status) VALUES (?, ?, ?)",
      [userId, transactionId, "Pending"]
    );

    return res.json({
      success: true,
      message: "Transaction recorded. Awaiting verification.",
    });
  } catch (error) {
    console.error("Payment Verification Error:", error);
    res.status(500).json({ message: "Error verifying payment" });
  }
});

module.exports = router;

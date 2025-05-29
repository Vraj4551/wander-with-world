const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

// POST /api/bookings - Create a new booking
router.post("/", async (req, res) => {
  try {
    const {
      userId,
      full_name,
      email,
      phone,
      address,
      check_in,
      check_out,
      adults,
      children,
      infants,
      destinationName,
      destinationPrice,
      transactionId, // Accept transactionId directly
    } = req.body;

    // Create new booking with transactionId
    const newBooking = await Booking.create({
      userId,
      full_name,
      email,
      phone,
      address,
      check_in,
      check_out,
      adults,
      children,
      infants,
      destinationName,
      destinationPrice,
      transactionId, // Store transactionId
    });

    res
      .status(201)
      .json({ message: "Booking created successfully", newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Server error, unable to create booking" });
  }
});

module.exports = router;

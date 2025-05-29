import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import "./Booking.scss";
import upiQrCode from "../../Assets/upiQrCode.jpg";

Modal.setAppElement("#root");

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state?.destination;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [transactionId, setTransactionId] = useState("");

  const [bookingDetails, setBookingDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0,
    infants: 0,
    destinationName: destination?.name || "",
    destinationPrice: destination?.price || 0,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!destination) {
    return <h2>No Destination Selected</h2>;
  }

  const handleBookNow = () => {
    if (!user) {
      alert("You must be logged in to book a trip!");
      navigate("/signup");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTransactionSubmit = async () => {
    if (transactionId.length !== 12) {
      alert("Transaction ID Error");
      return;
    }

    try {
      await axios.post(
        "http://localhost:4000/api/bookings",
        {
          userId: user.id,
          full_name: bookingDetails.fullName,
          email: bookingDetails.email,
          phone: bookingDetails.phone,
          address: bookingDetails.address,
          check_in: bookingDetails.checkInDate,
          check_out: bookingDetails.checkOutDate,
          adults: bookingDetails.adults,
          children: bookingDetails.children,
          infants: bookingDetails.infants,
          destinationName: bookingDetails.destinationName,
          destinationPrice: bookingDetails.destinationPrice,
          transactionId: transactionId, // Store transaction ID
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Transaction successful!");
      handleCloseModal();
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Error processing booking.");
    }
  };

  return (
    <div className="bookingContainer">
      <h2>Book Your Trip to {destination.name}</h2>
      <img src={destination.img} alt={destination.name} />
      <p>Location: {destination.location}</p>
      <p>Rating: {destination.rating}</p>
      <p>Price: ₹{destination.price}</p>
      <h3>Available Dates:</h3>
      <ul>
        {destination.availableDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
      <button className="bookBtn" onClick={handleBookNow}>
        Book Now
      </button>

      {/* Booking Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Booking Details"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Enter Your Booking Details</h2>
        <form>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={bookingDetails.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={bookingDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={bookingDetails.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={bookingDetails.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Check-in Date:</label>
            <input
              type="date"
              name="checkInDate"
              value={bookingDetails.checkInDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Check-out Date:</label>
            <input
              type="date"
              name="checkOutDate"
              value={bookingDetails.checkOutDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Adults:</label>
            <input
              type="number"
              name="adults"
              value={bookingDetails.adults}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>
          <div>
            <label>Children:</label>
            <input
              type="number"
              name="children"
              value={bookingDetails.children}
              onChange={handleInputChange}
              min="0"
            />
          </div>
          <div>
            <label>Infants:</label>
            <input
              type="number"
              name="infants"
              value={bookingDetails.infants}
              onChange={handleInputChange}
              min="0"
            />
          </div>
          <h3>Scan the QR Code & Make Payment</h3>
          <img src={upiQrCode} alt="UPI QR Code" style={{ width: "200px" }} />
          <p>UPI ID: urmilramani124@okicici</p>
          <div>
            <label>Enter Transaction ID:</label>
            <input
              type="text"
              name="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="bookBtn"
            onClick={handleTransactionSubmit}
          >
            Submit Payment
          </button>
          <button
            type="button"
            className="cancelBtn"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Booking;

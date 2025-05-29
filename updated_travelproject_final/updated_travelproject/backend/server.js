const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db"); // Import DB connection
require("dotenv").config();

const app = express();

// Connect Database & Sync
sequelize
  .sync({ alter: true }) // This will update the table if changes are made
  .then(() => console.log("Database connected and synced"))
  .catch((err) => console.error("Database sync error:", err));

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./auth")); // Auth routes
app.use("/api/bookings", require("./routes/bookings"));
app.use("/api/payment", require("./routes/payment"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

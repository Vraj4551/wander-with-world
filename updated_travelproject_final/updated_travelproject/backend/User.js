const { DataTypes } = require("sequelize");
const sequelize = require("./config/db"); // Import database connection

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync with database
sequelize
  .sync()
  .then(() => console.log("User table created"))
  .catch((err) => console.error("Error creating table:", err));

module.exports = User;

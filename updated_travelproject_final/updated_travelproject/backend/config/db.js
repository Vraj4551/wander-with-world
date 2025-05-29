const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: process.env.NODE_ENV === "development" ? console.log : false, // Show logs only in development
    pool: {
      max: 10, // Max connections
      min: 0,
      acquire: 30000, // 30 seconds before timing out
      idle: 10000, // 10 seconds idle timeout
    },
  }
);

sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection error:", err));

// Sync all models with DB (Enable if needed)
sequelize
  .sync({ alter: true }) // `alter: true` updates tables automatically, use `force: true` to reset tables
  .then(() => console.log("🔄 Database synchronized"))
  .catch((err) => console.error("❌ Database sync error:", err));

module.exports = sequelize;

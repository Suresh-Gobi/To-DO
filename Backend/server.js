// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import required modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models"); // Import Sequelize instance for database connection
const taskRoutes = require("./routes/taskRoutes"); // Import task-related routes

// Initialize the Express application
const app = express();

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define API routes
app.use("/api", taskRoutes);

// Define the port for the server to listen on, defaulting to 5000 if not specified in environment variables
const PORT = process.env.PORT || 5000;

// Start the server and connect to the database
app.listen(PORT, async () => {
  try {
    // Authenticate the database connection
    await sequelize.authenticate();
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Database connected successfully");
  } catch (error) {
    // Log any database connection errors
    console.error("Database connection error:", error);
  }
});

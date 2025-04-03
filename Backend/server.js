require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
});

const express = require("express"); // Import the Express framework
const { createTask, getTasks, completeTask } = require("../controllers/taskController"); 
// Import task-related controller functions

const router = express.Router(); // Create a new router instance

// Route to handle adding a new task
router.post("/add", createTask);

// Route to handle retrieving all tasks
router.get("/get", getTasks);

// Route to handle marking a task as complete by its ID
router.put("/:id/complete", completeTask);

module.exports = router; // Export the router for use in other parts of the application

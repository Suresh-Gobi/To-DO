const express = require("express");
const { createTask, getTasks, completeTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/add", createTask);
router.get("/get", getTasks);
router.put("/:id/complete", completeTask);

module.exports = router;

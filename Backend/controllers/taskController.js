const { Task } = require("../models");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description, completed: false });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all incomplete tasks (latest 5)
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { completed: false },
      order: [["createdAt", "DESC"]],
      limit: 5,
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark a task as completed
exports.completeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    await task.update({ completed: true });
    res.json({ message: "Task marked as completed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

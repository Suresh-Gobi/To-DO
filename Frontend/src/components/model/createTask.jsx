import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { createTask } from "../../redux/taskSlice";

export default function CreateTask() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && description.trim()) {
      dispatch(createTask({ title: task, description }));
      setTask("");
      setDescription("");
    }
  };
  
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Create Task
        </Typography>
        <TextField
          label="Task Title"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <TextField
          label="Task Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Add Task
        </Button>
      </Box>
    </Container>
  );
}

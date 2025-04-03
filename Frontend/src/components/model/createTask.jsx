import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, FormControlLabel, Checkbox } from "@mui/material";
import axios from "axios";

export default function CreateTask({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      try {
        await axios.post("http://localhost:5000/api/add", { 
          title, 
          description, 
          completed 
        });
        setTitle(""); // Clear inputs
        setDescription("");
        setCompleted(false);
        fetchTasks(); // Refresh task list
      } catch (error) {
        console.error("Error adding task:", error);
      }
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox checked={completed} onChange={(e) => setCompleted(e.target.checked)} />}
          label="Completed"
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Add Task
        </Button>
      </Box>
    </Container>
  );
}

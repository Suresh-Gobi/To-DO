import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { createTask } from "../../redux/taskSlice";

/**
 * CreateTask Component
 *
 * This component provides a form for creating a new task. It allows users to input
 * a task title and description, and dispatches an action to add the task to the store.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered CreateTask component.
 *
 * @example
 * <CreateTask />
 *
 * @description
 * - The component uses React's `useState` hook to manage the state of the task title
 *   and description inputs.
 * - The `useDispatch` hook from Redux is used to dispatch the `createTask` action.
 * - The form includes validation to ensure that both the task title and description
 *   are not empty before dispatching the action.
 *
 * @function handleSubmit
 * - Handles the form submission event.
 * - Prevents the default form submission behavior.
 * - Dispatches the `createTask` action with the task title and description if both
 *   fields are non-empty.
 * - Resets the input fields after successful submission.
 *
 * @state {string} task - The title of the task entered by the user.
 * @state {string} description - The description of the task entered by the user.
 */
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
          Add a Task
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
          Add
        </Button>
      </Box>
    </Container>
  );
}

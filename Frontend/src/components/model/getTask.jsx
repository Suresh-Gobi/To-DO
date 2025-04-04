import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, updateTask } from "../../redux/taskSlice";
import { Card, CardContent, Typography, Container, Grid, Button, CircularProgress } from "@mui/material";

// Component to display a list of tasks
export default function TaskList() {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
  const { tasks, loading, error } = useSelector((state) => state.tasks); // Access tasks, loading, and error state from Redux store

  // Fetch tasks when the component mounts
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Handler to mark a task as complete
  const handleComplete = (taskId) => {
    dispatch(updateTask(taskId));
  };

  // Show a loading spinner while tasks are being fetched
  if (loading) {
    return <CircularProgress />;
  }

  // Display an error message if there is an error
  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} direction="column">
        {/* Show a message if there are no tasks */}
        {tasks.length === 0 ? (
          <Typography variant="body1">No tasks available</Typography>
        ) : (
          // Reverse the tasks array, take the latest 5 tasks, and render them
          [...tasks] 
            .reverse() 
            .slice(0, 5) 
            .map((task) => (
              <Grid item key={task.id}>
                <Card 
                  sx={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    padding: 2, 
                    boxShadow: 3,
                    backgroundColor: "#d3d3d3" // Light gray background for the card
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    {/* Display task title */}
                    <Typography variant="h6">{task.title}</Typography>
                    {/* Display task description */}
                    <Typography variant="body2" color="textSecondary">
                      {task.description}
                    </Typography>
                  </CardContent>
                  {/* Button to mark the task as done */}
                  <Button 
                    variant="outlined" 
                    sx={{ borderColor: "black", color: "black" }} 
                    onClick={() => handleComplete(task.id)}
                  >
                    Done
                  </Button>
                </Card>
              </Grid>
            ))
        )}
      </Grid>
    </Container>
  );
}

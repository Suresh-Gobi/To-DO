import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/taskSlice";
import { Card, CardContent, Typography, Container, Grid, Button, CircularProgress, Box } from "@mui/material";

export default function TaskList() {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
<Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Task List
      </Typography>
      <Grid container spacing={2} direction="column">
        {tasks.map((task) => (
          <Grid item key={task.id}>
            <Card sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 2, boxShadow: 3 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {task.description}
                </Typography>
              </CardContent>
              <Button variant="outlined" color="primary">
                Done
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

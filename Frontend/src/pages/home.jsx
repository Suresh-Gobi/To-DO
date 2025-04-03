import React from 'react';
import Task from '../components/model/createTask';
import TaskList from '../components/model/getTask';
import { Container, Grid } from '@mui/material';

export default function Home() {
  return (
<Container maxWidth="lg" sx={{ mt: 4 }}>
  <Grid container spacing={4}>
    {/* Left side: Create Task */}
    <Grid item xs={12} md={6}>
      <Task />
    </Grid>

    {/* Right side: Task List (Scrollable) */}
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        maxHeight: "500px",
        overflowY: "auto",
      }}
    >
      <TaskList />
    </Grid>
  </Grid>
</Container>

  );
}

import React from "react";
import Task from "../components/model/createTask";
import TaskList from "../components/model/getTask";
import { Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, height: "80vh" }}>
      <Grid container spacing={4} sx={{ height: "100%" }}>
        {/* Left side: Create Task (Wider) */}
        <Grid item xs={12} md={7} sx={{  flexDirection: "column", justifyContent: "center" }}>
          <Task />
        </Grid>

        {/* Right side: Task List (Narrower & Scrollable) */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            height: "calc(100vh - 64px)",
            overflowY: "auto",
            borderLeft: "1px solid #ddd",
            padding: 2,
          }}
        >
          <TaskList />
        </Grid>
      </Grid>
    </Container>
  );
}

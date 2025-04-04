import React from "react";
import Task from "../components/model/createTask"; // Component for creating a new task
import TaskList from "../components/model/getTask"; // Component for displaying the list of tasks
import { Container, Grid } from "@mui/material"; // Material-UI components for layout and styling

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, height: "80vh" }}> {/* Main container with a max width and height */}
      <Grid container spacing={4} sx={{ height: "100%" }}> {/* Grid container for layout with spacing */}
        
        {/* Left side: Create Task (Wider section) */}
        <Grid 
          item 
          xs={12} 
          md={7} 
          sx={{ flexDirection: "column", justifyContent: "center" }} // Styling for alignment
        >
          <Task /> {/* Component to create a new task */}
        </Grid>

        {/* Right side: Task List (Narrower section & Scrollable) */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            height: "calc(100vh - 64px)", // Full height minus header height
            overflowY: "auto", // Enables vertical scrolling
            borderLeft: "1px solid #ddd", // Adds a left border
            padding: 2, // Padding inside the grid
          }}
        >
          <TaskList /> {/* Component to display the list of tasks */}
        </Grid>
      </Grid>
    </Container>
  );
}

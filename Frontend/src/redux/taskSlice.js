import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

// Fetch tasks from backend
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get("http://localhost:5000/api/get");
  return response.data;
});

// Create task
export const createTask = createAsyncThunk("tasks/createTask", async ({ title, description }) => {
  const response = await axios.post("http://localhost:5000/api/add", { title, description });
  return response.data;
});

// Update (Mark as completed)
export const updateTask = createAsyncThunk("tasks/updateTask", async (taskId) => {
  await axios.put(`http://localhost:5000/api/${taskId}/complete`);
  return taskId;
});


// Task slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;

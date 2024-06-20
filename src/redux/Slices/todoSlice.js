import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todoList: [],
  isLoading: false,
  isError: false,
};

export const getTodoData = createAsyncThunk("todo/getTodoData", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodoData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todoList = action.payload;
    });
    builder.addCase(getTodoData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { setTodoList, setIsTodoLoading, setIsTodoError } =
  todoSlice.actions;

export default todoSlice.reducer;

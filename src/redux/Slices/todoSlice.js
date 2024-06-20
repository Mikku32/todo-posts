import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  isLoading: false,
  isError: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    setIsTodoLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsTodoError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setTodoList, setIsTodoLoading, setIsTodoError } =
  todoSlice.actions;

export default todoSlice.reducer;

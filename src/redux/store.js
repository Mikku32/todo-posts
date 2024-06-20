import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slices/todoSlice";
import postSlice from "./Slices/postSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    post: postSlice,
  },
});

export default store;

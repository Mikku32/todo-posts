import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postList: [],
  isLoading: false,
  isError: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostList: (state, action) => {
      state.postList = action.payload;
    },
    setIsPostLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsPostError: (state, action) => {
      state.isError = action.payload;
    },
  },
});
export const { setPostList, setIsPostLoading, setIsPostError } =
  postSlice.actions;

export default postSlice.reducer;

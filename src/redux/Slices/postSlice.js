import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postList: [],
  isLoading: false,
  isError: false,
};

export const getPostData = createAsyncThunk("post/getPostData", async () => {
  const res = await axios.get(
    "https://json-placeholder.mock.beeceptor.com/posts"
  );
  return res.data;
});

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
  extraReducers: (builder) => {
    builder.addCase(getPostData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.postList = action.payload;
    });
    builder.addCase(getPostData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const { setPostList, setIsPostLoading, setIsPostError } =
  postSlice.actions;

export default postSlice.reducer;

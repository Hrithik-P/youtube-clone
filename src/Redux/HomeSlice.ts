import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  suggestedVideos: [],
  loading: false,
};

const getSuggestedVideos = createAsyncThunk(
  "posts/getPosts",
  async (thunkAPI) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (data) => data.json()
    );
    return res;
  }
);

export const HomeSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSuggestedVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSuggestedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestedVideos = action.payload;
      })
      .addCase(getSuggestedVideos.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const homeReducer = HomeSlice.reducer;

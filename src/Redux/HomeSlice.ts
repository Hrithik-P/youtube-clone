import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { suggestedConfig } from "./config";

export type SuggestedVideo = {
  id: {
    videoId: string;
    kind: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    publishedTime: string;
    thumbnails: {
      standard: {
        url: string;
      };
      medium: {
        url: string;
      };
      maxres: {
        url: string;
      };
    };
  };
};
interface InitialState {
  suggestedVideo: SuggestedVideo[];
  loading: boolean;
}

const initialState: InitialState = {
  suggestedVideo: [],
  loading: false,
};

export const getSuggestedVideos = createAsyncThunk(
  "home/getSuggestedVideos",
  async () => {
    const res = await axios
      .get("https://youtube-v31.p.rapidapi.com/search", suggestedConfig)
      .then((response) => {
        return response.data.items;
      })
      .catch((error) => {
        return error.message;
      });

    return res;
  }
);

export const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSuggestedVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSuggestedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestedVideo = action.payload;
      })
      .addCase(getSuggestedVideos.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const homeReducer = HomeSlice.reducer;

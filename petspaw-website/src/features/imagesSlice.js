import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "live_iCy7bYnZSV1UODnOTmfGQPVN2CbjBt4z15F4BYwDr1ZUbBracbNR0mh3ASssomON";
const BASE_URL = "https://api.thecatapi.com";

const initialState = {
  items: [],
  status: null,
};

export const imagesFetch = createAsyncThunk("images/imagesFetch", async () => {
  const response = await axios.get(`${BASE_URL}/v1/images/search?api_key=${API_KEY}`);
  return response?.data;
});

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(imagesFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(imagesFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(imagesFetch.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default imagesSlice.reducer;

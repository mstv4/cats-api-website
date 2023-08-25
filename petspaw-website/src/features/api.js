import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "live_iCy7bYnZSV1UODnOTmfGQPVN2CbjBt4z15F4BYwDr1ZUbBracbNR0mh3ASssomON";
const BASE_URL = "https://api.thecatapi.com";

export const imagesListFetch = createAsyncThunk("images/imagesFetch", async (
    queryString = '',    
) => {
  const response = await axios.get(`${BASE_URL}/v1/images/search?limit=${queryString}&&api_key=${API_KEY}`);
  return response?.data;
});

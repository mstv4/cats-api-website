import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import imagesListReducer from "./imagesListSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    images: imagesListReducer,
  },
});

export default store;

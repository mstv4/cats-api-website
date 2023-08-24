import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import imagesReducer, { imagesFetch } from "./features/imagesSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    images: imagesReducer,
  },
});

store.dispatch(imagesFetch());

export default store;

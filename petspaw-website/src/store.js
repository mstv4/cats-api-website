import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import { imagesFetch } from "./features/imagesSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    images: imagesFetch,
  },
});

store.dispatch(imagesFetch());

export default store;

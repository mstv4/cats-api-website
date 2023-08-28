import { configureStore } from "@reduxjs/toolkit";
// import searchReducer from "./searchSlice";
import breedsReducer from './Slice/breedsSlice';
import imagesReducer from './Slice/imagesSlice';

const store = configureStore({
  reducer: {
    breeds: breedsReducer,
    images: imagesReducer,
  },
});

export default store;

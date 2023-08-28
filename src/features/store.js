import { configureStore } from "@reduxjs/toolkit";
import breedsReducer from './Slice/breedsSlice';
import imagesReducer from './Slice/imagesSlice';

const store = configureStore({
  reducer: {
    breeds: breedsReducer,
    images: imagesReducer,
  },
});

export default store;

import { imagesListFetch } from "./api";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};

const imagesListSlice = createSlice({
  name: "imagesList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(imagesListFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(imagesListFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(imagesListFetch.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default imagesListSlice.reducer;

// const initialState = {
//   items: [],
// };

// export const imagesListSlice = createSlice({
//   name: "imagesList",
//   initialState,
//   reducers: {
//     setImagesList: (state, action) => {
//       state.items = action.payload;
//     },
//   },
// });

// export const { setImagesList } = imagesListSlice.actions;

// export const fetchImagesList =
//   ( searchQuery ) =>
//   async (dispatch) => {
//     const data = imagesListFetch({
//       queryString: searchQuery,
//     });
//     dispatch(setImagesList(data.items));
//   };

// export default imagesListSlice.reducer;

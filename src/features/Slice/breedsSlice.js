import { createSlice } from '@reduxjs/toolkit';

const breedsSlice = createSlice({
  name: 'breeds',
  initialState: [],
  reducers: {
    setBreeds: (state, action) => {
      return action.payload;
    },
  },
});

export const { setBreeds } = breedsSlice.actions;
export default breedsSlice.reducer;
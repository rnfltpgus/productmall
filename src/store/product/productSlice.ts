import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allIds: [],
  byId: {},
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

// export const {} = productSlice.actions;

export default productSlice.reducer;

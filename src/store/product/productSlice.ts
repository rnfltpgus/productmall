import { createSlice } from '@reduxjs/toolkit';

import fetchProduct from './productThunk';
import { Products } from 'types/product.types';

export interface InitialState {
  allIds: string[];
  byId: {
    [key: string]: Products;
  };
}

const initialState: InitialState = {
  allIds: [],
  byId: {},
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      const { productList } = action.payload;

      productList.forEach(item => {
        state.byId[item.club.id] = {
          club: item.club,
          price: item.price,
          leaders: item.leaders,
          partners: item.partners,
          createdAt: item.createdAt,
        };
      });
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
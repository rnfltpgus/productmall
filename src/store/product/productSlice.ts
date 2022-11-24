import { createSlice } from '@reduxjs/toolkit';

import fetchProduct from './productThunk';
import { Products } from 'types/product.types';

export interface InitialState {
  allIds: string[];
  byId: {
    [key: string]: Products;
  };
  isLoading: boolean;
}

const initialState: InitialState = {
  allIds: [],
  byId: {},
  isLoading: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => {
      state.isLoading = true;
    });
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
        state.allIds.push(item.club.id);
      });
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;

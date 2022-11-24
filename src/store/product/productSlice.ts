import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import fetchProduct from './productThunk';
import { Products } from 'types/product.types';

export interface InitialState {
  allIds: string[];
  byId: {
    [key: string]: Products;
  };
  isLoading: boolean;
  filterList: string[];
  searchKeyword: string;
}

const initialState: InitialState = {
  allIds: [],
  byId: {},
  isLoading: false,
  filterList: [],
  searchKeyword: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<string>) => {
      const { payload } = action;

      state.filterList.push(payload);
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const filterResult = state.filterList.filter(item => item !== payload);

      state.filterList = filterResult;
    },
    setSearchKeyword(state, action) {
      const { payload } = action;

      state.searchKeyword = payload;
    },
  },
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

      state.isLoading = false;
    });
  },
});

export const { addFilter, removeFilter, setSearchKeyword } = productSlice.actions;

export default productSlice.reducer;

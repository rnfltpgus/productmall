import { configureStore } from '@reduxjs/toolkit';
import * as reduxThunk from 'redux-thunk/extend-redux';
import logger from 'redux-logger';

import productReducer from './product/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const productIsLoading = (state: RootState) => state.product.isLoading;
export const productFilterList = (state: RootState) => state.product.filterList;
export const productSearchKeyword = (state: RootState) => state.product.searchKeyword;
export const productListById = (state: RootState) => state.product.byId;

import { createAsyncThunk } from '@reduxjs/toolkit';

import Instance from 'api/Instance';
import { Products } from 'types/product.types';

export interface FetchProduct {
  productList: Products[];
}

const fetchProduct = createAsyncThunk<FetchProduct>('products/fetchProduct', async () => {
  const { data } = await Instance.get<Products[]>('templates/ePNAVU1sgGtQ/data');

  const result: FetchProduct = {
    productList: [],
  };

  data.forEach(({ club, price, leaders, partners, createdAt }) => {
    result.productList.push({ club, price, leaders, partners, createdAt });
  });

  return result;
});

export default fetchProduct;

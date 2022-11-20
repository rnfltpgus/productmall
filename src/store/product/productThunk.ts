import { createAsyncThunk } from '@reduxjs/toolkit';

import Instance from 'api/Instance';

const fetchProduct = createAsyncThunk('products/fetchProduct', async () => {
  const productData = await Instance.get('templates/ePNAVU1sgGtQ/data');

  console.log(productData);

  return productData.data;
});

export default fetchProduct;

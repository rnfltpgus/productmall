import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, productListById } from 'store/configureStore';
import fetchProduct from 'store/product/productThunk';
import ProductList from 'components/ProductList';
import SearchInput from 'components/SearchInput';

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productInfo = useSelector(productListById);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <SearchInput />
      <ProductList productInfo={productInfo} />
    </>
  );
};

export default Main;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'store/configureStore';
import fetchProduct from 'store/product/productThunk';
import ProductList from 'components/ProductList';
import SearchInput from 'components/SearchInput';

const Main = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const productInfo = useSelector((state: RootState) => state.product.byId);

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

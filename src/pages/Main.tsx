import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/configureStore';

import fetchProduct from 'store/product/productThunk';
import { Products } from 'types/product.types';

const Main = (): JSX.Element => {
  const [products, setProducts] = useState<Products[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return <div>썬크 데이터 호출 확인</div>;
};

export default Main;

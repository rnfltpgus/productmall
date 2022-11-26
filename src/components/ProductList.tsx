import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchProduct from 'store/product/productThunk';
import {
  AppDispatch,
  productFilterList,
  productIsLoading,
  productListById,
  productSearchKeyword,
} from 'store/configureStore';
import ProductCard from './ProductCard';
import LoadingSpanner from './LoadingSpanner';
import { Products } from 'types/product.types';
import { isMatchName, isMatchKeyword, isMatchOptions } from 'helper/helper';

import styled from '@emotion/styled';

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productInfo = useSelector(productListById);
  const filterListInfo = useSelector(productFilterList);
  const searchKeywordInfo = useSelector(productSearchKeyword);
  const isLoading = useSelector(productIsLoading);
  const [bottom, setBottom] = useState<HTMLDivElement | null>(null);
  const bottomObserver = useRef<IntersectionObserver | null>(null);
  const [ResultList, setResultList] = useState<Products[]>([]);
  const [listLength, setListLength] = useState<number>(5);
  const productArray = Object.values(productInfo).slice(0, listLength);

  useEffect(() => {
    setResultList(productArray);
  }, [listLength]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          dispatch(fetchProduct());
        }
      },
      { threshold: 0.5 }
    );
    bottomObserver.current = observer;
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) return;

    const observer = bottomObserver.current;

    if (bottom) {
      observer?.observe(bottom);
      setListLength(listLength + 5);
    }

    return () => {
      if (bottom) observer?.unobserve(bottom);
    };
  }, [bottom]);

  let productResultList = ResultList;

  if (searchKeywordInfo) {
    productResultList = productResultList.filter(productInfo => {
      const { club, leaders, partners } = productInfo;

      return (
        isMatchKeyword(`${club.name}${club.description}`, searchKeywordInfo) ||
        isMatchName([...leaders, ...partners], searchKeywordInfo)
      );
    });
  }

  if (filterListInfo.length) {
    productResultList = productResultList.filter(productInfo => {
      return isMatchOptions(`${productInfo.club.type}${productInfo.club.place}`, filterListInfo);
    });
  }

  return (
    <>
      <ProductListContainer>
        {isLoading ? (
          <LoadingSpanner />
        ) : (
          <>
            {productResultList.length ? (
              productResultList.map(product => {
                return <ProductCard key={product.club.id} productInfo={product} />;
              })
            ) : (
              <div>❌ 검색 결과가 없습니다.</div>
            )}
            <Observer ref={setBottom} />
          </>
        )}
      </ProductListContainer>
    </>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  height: 91vh;
  overflow: scroll;
`;

const Observer = styled.div`
  background-color: #ff9191;
  height: 3.5vh;
`;

import { useSelector } from 'react-redux';

import { productFilterList, productIsLoading, productSearchKeyword } from 'store/configureStore';
import ProductCard from './ProductCard';
import LoadingSpanner from './LoadingSpanner';
import { Products } from 'types/product.types';
import { isMatchName, isMatchKeyword, isMatchOptions } from 'helper/helper';

import styled from '@emotion/styled';

interface ProductListProps {
  productInfo: {
    [key: string]: Products;
  };
}

const ProductList = ({ productInfo }: ProductListProps) => {
  const filterListInfo = useSelector(productFilterList);
  const searchKeywordInfo = useSelector(productSearchKeyword);
  const isLoading = useSelector(productIsLoading);
  const productArray = Object.values(productInfo);

  let productResultList = productArray;

  const productResult = () => {
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

    return productResultList;
  };

  productResult();

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

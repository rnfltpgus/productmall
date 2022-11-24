import ProductCard from './ProductCard';
import LoadingSpanner from './LoadingSpanner';
import { Products } from 'types/product.types';

import styled from '@emotion/styled';

interface ProductListProps {
  productInfo: {
    [key: string]: Products;
  };
}

const ProductList = ({ productInfo }: ProductListProps) => {
  const productInfoArray = Object.entries(productInfo);

  return (
    <>
      <ProductListContainer>
        {productInfoArray.length === 0 ? (
          <LoadingSpanner />
        ) : (
          <>
            {productInfoArray.map(([key, value]) => {
              return <ProductCard key={key} productInfo={value} />;
            })}
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

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
  return (
    <ProductListContainer>
      {Object.keys(productInfo).length === 0 ? (
        <LoadingSpanner />
      ) : (
        <>
          {Object.entries(productInfo).map(([key, value]) => {
            return <ProductCard key={key} productInfo={value} />;
          })}
        </>
      )}
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  height: 91vh;
  overflow: scroll;
`;

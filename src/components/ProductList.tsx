import ProductCard from './ProductCard';
import LoadingSpanner from './LoadingSpanner';
import { Products } from 'types/product.types';

interface ProductListProps {
  productInfo: {
    [key: string]: Products;
  };
}

const ProductList = ({ productInfo }: ProductListProps) => {
  return (
    <>
      {Object.keys(productInfo).length === 0 ? (
        <LoadingSpanner />
      ) : (
        <>
          {Object.entries(productInfo).map(([key, value]) => {
            return <ProductCard key={key} productInfo={value} />;
          })}
        </>
      )}
    </>
  );
};

export default ProductList;

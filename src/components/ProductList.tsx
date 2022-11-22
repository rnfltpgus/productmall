import ProductCard from './ProductCard';
import { Products } from 'types/product.types';
import LoadingSpanner from './LoadingSpanner';

interface IProductListProps {
  productInfo: {
    [key: string]: Products;
  };
}

const ProductList = ({ productInfo }: IProductListProps): JSX.Element => {
  return (
    <>
      {Object.keys(productInfo).length === 0 ? (
        <LoadingSpanner />
      ) : (
        <>
          {Object.entries(productInfo).map(([key, value]) => {
            const { club, price, leaders, partners, createdAt } = value;

            return (
              <ProductCard
                key={key}
                club={club}
                price={price}
                leaders={leaders}
                partners={partners}
                createdAt={createdAt}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default ProductList;

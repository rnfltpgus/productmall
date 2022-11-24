import { useNavigate } from 'react-router-dom';

import { Club, Person } from 'types/product.types';

import styled from '@emotion/styled';

interface ProductCardProps {
  productInfo: {
    club: Club;
    price: number;
    leaders: Person[];
    partners: Person[];
    createdAt: string;
  };
}

const ProductCard = ({ productInfo }: ProductCardProps) => {
  const { club, price } = productInfo;
  const { id, name, type, place, description, coverUrl } = club;
  const navigate = useNavigate();

  const onClickHandler = (id: string) => {
    navigate(id);
  };

  return (
    <>
      <ProductCardContainer onClick={() => onClickHandler(id)}>
        <img src={coverUrl} alt="club-img" />
        <h3>{name}</h3>
        <span>{`${type}, ${place}, ₩${price}`}</span>
        <Description>{description}</Description>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  border: 1px solid #c4c4c4;
  border-radius: 0.3rem;
  padding: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
  }
`;

const Description = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

import { useNavigate } from 'react-router-dom';

import { Club, Person } from 'types/product.types';

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
    <div onClick={() => onClickHandler(id)}>
      <img src={coverUrl} width="100%" height="100%" alt="club-img" />
      <h3>{name}</h3>
      <span>{`${type}, ${place}, ₩${price}`}</span>
      <div
        style={{ height: 20, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {description}
      </div>
    </div>
  );
};

export default ProductCard;

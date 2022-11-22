import { Products } from 'types/product.types';

const ProductCard = ({ club, price, leaders, partners, createdAt }: Products) => {
  const { name, type, place, description, meetings } = club;

  return (
    <>
      <div>
        <h2>{name}</h2>
        <span>{createdAt}</span>
        <div>
          <span>리더: </span>
          {leaders.map(leader => {
            return leader.name === '' ? (
              <span>🕹미정</span>
            ) : (
              <span key={leader.name}>{leader.name}</span>
            );
          })}
        </div>
        <div>
          <span>파트너: </span>
          {partners.map(partner => {
            return partner.name === '' ? (
              <span>🕹미정</span>
            ) : (
              <span key={partner.name}>{partner.name}</span>
            );
          })}
        </div>
        <span>{`유형: ${type}, 장소: ${place}, 주: ${meetings.length} 회 진행, 비용 ₩${price}`}</span>
        <h4>{description}</h4>
      </div>
    </>
  );
};

export default ProductCard;

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { productListById } from 'store/configureStore';

import styled from '@emotion/styled';

type MouseEvent = React.MouseEvent<HTMLButtonElement>;

dayjs.locale('ko');

const Detail = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const productInfo = useSelector(productListById);
  const targetProduct = productInfo[productId as string];

  const onClickBackHandler = (event: MouseEvent) => {
    event.stopPropagation();

    navigate(-1);
  };

  return (
    <>
      <ProductCardContainer key={targetProduct.club.id}>
        <Button onClick={onClickBackHandler}>뒤로가기</Button>
        <img src={targetProduct.club.coverUrl} alt="club-img" />
        <hr />
        <h2>{targetProduct.club.name}</h2>
        <span>{dayjs(targetProduct.createdAt).format('MM/DD/MM (ddd) HH:MM')}</span>
        <div>
          <span>리더: </span>
          {targetProduct.leaders.map(leader => {
            return leader.name === '' ? (
              <span>🕹미정</span>
            ) : (
              <span key={leader.name}>{leader.name}</span>
            );
          })}
        </div>
        <div>
          <span>파트너: </span>
          {targetProduct.partners.map(partner => {
            return partner.name === '' ? (
              <span>🕹미정</span>
            ) : (
              <span key={partner.name}>{partner.name}</span>
            );
          })}
        </div>
        <span>{`유형: ${targetProduct.club.type}, 장소: ${targetProduct.club.place}, 주: ${targetProduct.club.meetings.length} 회 진행, ₩${targetProduct.price}`}</span>
        <h4>{targetProduct.club.description}</h4>
      </ProductCardContainer>
    </>
  );
};

export default Detail;

const ProductCardContainer = styled.div`
  border-radius: 0.3rem;

  hr {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
  }
`;

const Button = styled.button`
  width: 12%;
  height: 3.5vh;
  background-color: #ffa500;
  border-radius: 0.3rem;
  border: none;
  margin-bottom: 1vh;
`;

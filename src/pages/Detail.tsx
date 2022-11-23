import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { RootState } from 'store/configureStore';

type MouseEvent = React.MouseEvent<HTMLButtonElement>;

dayjs.locale('ko');

const Detail = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const productInfo = useSelector((state: RootState) => state.product.byId);
  const targetProduct = productInfo[productId as string];

  const onClickBackHandler = (event: MouseEvent) => {
    event.stopPropagation();

    navigate(-1);
  };

  return (
    <>
      <div key={targetProduct.club.id}>
        <button onClick={onClickBackHandler}>뒤로가기</button>
        <img src={targetProduct.club.coverUrl} width="100%" height="100%" alt="club-img" />
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
        <span>{`유형: ${targetProduct.club.type}, 장소: ${targetProduct.club.place}, 주: ${targetProduct.club.meetings.length} 회 진행, 비용 ₩${targetProduct.price}`}</span>
        <h4>{targetProduct.club.description}</h4>
      </div>
    </>
  );
};

export default Detail;

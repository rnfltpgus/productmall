import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <div>Not Found Page</div>
      <span>페이지를 찾을 수 없습니다.</span>
      <span>입력하신 주소가 정확한지 다시 한번 확인해주세요.</span>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전 페이지
      </button>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-top: 50%;

  div {
    margin-bottom: 1.5rem;
    font-weight: bold;
    font-size: 2rem;
  }

  span {
    display: block;
  }

  button {
    margin-top: 1rem;
    background-color: #ff7900;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    transform: translateY(0);
    border-radius: 0.3rem;
    height: 3.5vh;
    width: 15vw;
  }

  button:hover {
    transform: translateY(-3px);
  }
`;

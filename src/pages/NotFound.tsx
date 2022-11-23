import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <NotFoundContainer>
        <div>Not Found Page</div>
        <span>페이지를 찾을 수 없습니다.</span>
        <span>버튼을 누르면 메인 페이지으로 이동합니다.</span>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          메인 페이지로 이동
        </button>
      </NotFoundContainer>
    </>
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
    height: 3.8vh;
    width: 23vw;
  }

  button:hover {
    transform: translateY(-3px);
  }
`;

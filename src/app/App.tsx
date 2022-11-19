import styled from '@emotion/styled';

const App = () => {
  return (
    <AppContainer>
      <div>안녕하세요. 프론트 엔드 분야에 지원한 정세현입니다.</div>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 31rem;
  height: 100vh;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 1rem;
`;

import { Route, Routes } from 'react-router-dom';

import Main from 'pages/Main';

import styled from '@emotion/styled';
import NotFound from 'pages/NotFound';
import Detail from 'pages/Detail';

const App = (): JSX.Element => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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

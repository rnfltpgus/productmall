import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';

import Main from 'pages/Main';
import Detail from 'pages/Detail';
import NotFound from 'pages/NotFound';

import styled from '@emotion/styled';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path=":id" element={<Detail />} />
          <Route path="/" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContainer>
    </Provider>
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

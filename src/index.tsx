import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/App';

import { Global } from '@emotion/react';
import GlobalStyle from 'style/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Global styles={GlobalStyle} />
      <App />
    </Router>
  </React.StrictMode>
);

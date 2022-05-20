import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './style/GlobalStyled';
// import { Home } from './pages/Home';
// import { Contato } from './pages/Contato';
import App from './Routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <GlobalStyle/>
  </React.StrictMode>
);

reportWebVitals();

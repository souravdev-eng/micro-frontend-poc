import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from 'store/store';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.querySelector('#root')
);

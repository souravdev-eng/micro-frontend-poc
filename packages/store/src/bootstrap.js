import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './store';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('_store-dev')
);

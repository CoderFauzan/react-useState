import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

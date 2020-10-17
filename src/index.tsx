import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

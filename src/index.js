// index.js ou index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Importe o arquivo Style.css aqui

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

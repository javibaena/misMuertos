import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; /* esto importa app js */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* esto es elemento que vamos a crear */}
  </React.StrictMode>
);



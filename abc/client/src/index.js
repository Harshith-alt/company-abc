import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CMS from './pages/CMS';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <CMS /> */}
  </React.StrictMode>
);

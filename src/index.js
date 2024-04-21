import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BasePlate from './components/basePlate/BasePlate';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasePlate />
  </React.StrictMode>
);

reportWebVitals();

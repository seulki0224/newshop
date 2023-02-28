/* eslint-disable */

import App from './App';
// import App from './unitConcept/Redux';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Repositories from './Repositories/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App title="Hello Gama Academy" />
);

Repositories();

reportWebVitals();

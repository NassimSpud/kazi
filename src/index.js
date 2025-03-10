import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render( // use root.render
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
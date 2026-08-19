import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap Icons + Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap JS bundle (needed for the carousel's data-bs-* attributes to work)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Your custom stylesheet — paste the content of your original style.css in here
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

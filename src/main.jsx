import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ Import this
import Root from './Root';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ⬅️ Add this wrapper */}
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);

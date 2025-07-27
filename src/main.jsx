import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ Use HashRouter instead of BrowserRouter
import Root from './Root';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Wrap with HashRouter for GitHub Pages compatibility */}
      <Root />
    </HashRouter>
  </React.StrictMode>
);

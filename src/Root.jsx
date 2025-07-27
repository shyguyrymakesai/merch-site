import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import SantoriniFund from './SantoriniFund';

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="santorini" element={<SantoriniFund />} /> {/* ✅ FIXED */}
    </Routes>
  );
}

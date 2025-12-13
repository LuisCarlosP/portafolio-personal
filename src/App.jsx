import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import TerminalPage from './pages/TerminalPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/terminal" element={<TerminalPage />} />
    </Routes>
  );
}

export default App;

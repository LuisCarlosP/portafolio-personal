import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import TerminalPage from './pages/TerminalPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  useEffect(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => loadingScreen.remove(), 500);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/terminal" element={<TerminalPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;



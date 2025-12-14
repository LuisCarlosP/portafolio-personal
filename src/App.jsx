import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import TerminalPage from './pages/TerminalPage';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/terminal" element={<TerminalPage />} />
      </Routes>
    </>
  );
}

export default App;


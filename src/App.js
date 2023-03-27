import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ConnectPage from './pages/ConnectPage';
import ModelingPage from './pages/ModelingPage';
import HeadshotsPage from './pages/HeadshotsPage';
import ProductionBTSPage from './pages/ProductionBTSPage';
import ActorReelsPage from './pages/ActorReels';
import BioPage from './pages/BioPage';
import React, { useState } from 'react';

function App() {

  return (
    // <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bio" element={<BioPage />} />
      <Route path="/connect" element={<ConnectPage />} />
      <Route path="/headshots" element={<HeadshotsPage />} />
      <Route path="/reels" element={<ActorReelsPage />} />
      <Route path="/productionBTS" element={<ProductionBTSPage />} />
      <Route path="/modeling" element={<ModelingPage />} />
    </Routes>
    // </Layout>
  );
}

export default App;

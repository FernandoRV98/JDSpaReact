import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import MassageDetails from './pages/massage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/masaje/:id" element={<MassageDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
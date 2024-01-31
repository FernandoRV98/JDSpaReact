import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import MassageDetails from './pages/massage';
import ProductDetails from './pages/product'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/masaje/:id" element={<MassageDetails />} />
        <Route path="/producto/:id" element={<ProductDetails />} /> {/* Usa element en lugar de component */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
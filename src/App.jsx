import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home'; // certifique-se que essa página exista
import Experiencias from './pages/Experiencias/Experiencias';
import Contato from './pages/Contato/Contato';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/início" element={<Home />} />
        <Route path="/experiências" element={<Experiencias />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
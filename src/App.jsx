import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Experiencias from './pages/Experiencias/Experiencias';
import Contato from './pages/Contato/Contato';
import Projetos from './pages/Projetos/Projetos';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração das animações em ms
      once: true,     // anima uma única vez ao rolar
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Redireciona a raiz "/" para "/início" */}
        <Route path="/" element={<Navigate to="/início" />} />
        <Route path="/início" element={<Home />} />
        <Route path="/experiências" element={<Experiencias />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

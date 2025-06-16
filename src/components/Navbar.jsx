import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoheitordenech from '../assets/logoheitordenech.png';
import './Navbar.css';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(prev => !prev);
    console.log('Menu aberto?', !menuAberto); // pra testar
  };

  useEffect(() => {
    const body = document.body;

    if (menuAberto) {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
    } else {
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
    }

    return () => {
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
    };
  }, [menuAberto]);

  return (
    <nav className="navbar">
      <div className="navbar-img">
        <img src={logoheitordenech} alt="Logo" />
      </div>

      <ul className="navbar-text">
        <li><NavLink to="/início" className={({ isActive }) => (isActive ? 'active-link' : 'navbar-link')}>início</NavLink></li>
        <li><NavLink to="/experiências" className={({ isActive }) => (isActive ? 'active-link' : 'navbar-link')}>experiências</NavLink></li>
        <li><NavLink to="/contato" className={({ isActive }) => (isActive ? 'active-link' : 'navbar-link')}>contato</NavLink></li>
      </ul>

      <div className="navbar-icons">
        <a href="https://www.linkedin.com/in/heitor-de-albuquerque-denech-5a4669239/" target='_blank' rel="noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/HeitorDenech?tab=repositories" target='_blank' rel="noreferrer"><i className="bi bi-github"></i></a>
      </div>

      <div id="menu">
        <div
          id="menu-bar"
          className={menuAberto ? 'change' : ''}
          onClick={alternarMenu}
        >
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>

        <nav className={`nav ${menuAberto ? 'menu-ativo' : ''}`}>
          {menuAberto && (
            <button className="fechar-menu mostrar-fechar" onClick={alternarMenu}>×</button>
          )}
          <ul>
            <div className='text-menu'>
              <li><NavLink to="/experiências" onClick={alternarMenu}>Experiências</NavLink></li>
              <li><NavLink to="/contato" onClick={alternarMenu}>Contato</NavLink></li>
              <li><NavLink to="/início" onClick={alternarMenu}>Início</NavLink></li>
            </div>
            <div className='icons-menu'>
              <a href="https://www.linkedin.com/in/heitor-de-albuquerque-denech-5a4669239/" target='_blank' rel="noreferrer"><li id='linkedin-icon'><i className="bi bi-linkedin"></i></li></a>
              <a href="https://github.com/HeitorDenech?tab=repositories" target='_blank' rel="noreferrer"><li id='github-icon'><i className="bi bi-github"></i></li></a>
            </div>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

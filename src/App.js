import React, { useState, useEffect, useRef } from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';

import Main from './pages/Main';

import './App.css';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <ul id='menu-main-navigation'>
            <li className='menu-item'><Link to="/" >Accueil</Link></li>
            <li className='menu-item'><Link to="/mes-valeurs" >Mes valeurs</Link></li>
            <li className='menu-item'><Link to="/mes-services" >Mes Services</Link></li>
            <li className='menu-item'><Link to="/devis" >Devis</Link></li>
            <li className='menu-item'><Link to="/Link-propos" >À propos</Link></li>
            <li className='menu-item'><Link to="/contact" >Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="App">
        <Main />
      </div>
    </div>
  );
}

export default App;

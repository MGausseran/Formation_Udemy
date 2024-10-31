import { useState } from 'react';
import './header.css';

const Header = () => {
  // État pour gérer l'ouverture/fermeture du menu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1>Fridgify</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Icône hamburger */}
      </div>

      {/* Menu déroulant */}
      <nav className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Settings</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

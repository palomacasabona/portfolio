import { useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <div className="logo">Paloma</div>
      <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>
      <ul className={`nav-links ${open ? 'show' : ''}`}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre mí</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
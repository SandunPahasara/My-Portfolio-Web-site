import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          MyProfile
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <>&#10005;</> : <>&#9776;</>} {/* X or ☰ */}
        </div>

        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'} id="navMenu">
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={closeMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

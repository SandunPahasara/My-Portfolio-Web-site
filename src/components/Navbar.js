import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          MyProfile
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <>&#10005;</> : <>&#9776;</>} {/* X or ☰ */}
        </div>

        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'} id="navMenu">
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-links ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-links ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-links ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#certificates" 
              className={`nav-links ${activeSection === 'certificates' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}
            >
              Certificates
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={`nav-links ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </li>
          <li className="nav-item theme-toggle-item">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

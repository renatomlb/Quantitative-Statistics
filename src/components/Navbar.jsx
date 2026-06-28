import { useState } from 'react';
import { SECTIONS } from '../data/sections';
import lunexLogo from '../assets/lnx_logo_bildmarke-white.png';
import './Navbar.css';

export default function Navbar({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNav(id) {
    onNavigate(id);
    setMenuOpen(false);
  }

  return (
    <header className="navbar" role="banner">
      <nav className="navbar__inner" aria-label="Main navigation">

        {/* Brand: logo | gap | BPTY12 / CANVAS stacked */}
        <div className="navbar__brand-group">
          <button
            className="navbar__logo-btn"
            onClick={() => handleNav(null)}
            aria-label="Go to homepage"
          >
            <img src={lunexLogo} alt="LUNEX logo" className="navbar__logo" />
          </button>

          <div className="navbar__brand-info">
            <button
              className="navbar__brand"
              onClick={() => handleNav(null)}
              aria-label="Go to homepage"
            >
              <span className="navbar__brand-abbr">BPTY12</span>
              <span className="navbar__brand-name">Statistics</span>
            </button>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                className={`navbar__link${activeSection === s.id ? ' navbar__link--active' : ''}`}
                onClick={() => handleNav(s.id)}
                aria-current={activeSection === s.id ? 'page' : undefined}
              >
                {s.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul id="mobile-menu" className="navbar__mobile" role="list">
          <li>
            <button
              className={`navbar__mobile-link${activeSection === null ? ' navbar__mobile-link--active' : ''}`}
              onClick={() => handleNav(null)}
              aria-current={activeSection === null ? 'page' : undefined}
            >
              Home
            </button>
          </li>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                className={`navbar__mobile-link${activeSection === s.id ? ' navbar__mobile-link--active' : ''}`}
                onClick={() => handleNav(s.id)}
                aria-current={activeSection === s.id ? 'page' : undefined}
              >
                {s.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

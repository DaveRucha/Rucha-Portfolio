import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Home from './Pages/Home';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: 'Banner', label: 'Home' },
    { to: 'introduction', label: 'About' },
    { to: 'education', label: 'Education' },
    { to: 'experience', label: 'Experience' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <Router>
      <div style={{ background: '#0A0F1E', minHeight: '100vh' }}>

        <nav style={{
          background: 'rgba(10, 15, 30, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #1E293B',
          position: 'fixed',
          top: 0, left: 0,
          width: '100%',
          zIndex: 50,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 120px',
          boxSizing: 'border-box',
        }}>
          <style>{`
            @media (max-width: 768px) {
              .nav-inner { padding: 0 24px !important; }
              .nav-links-desktop { display: none !important; }
              .hamburger { display: flex !important; }
              .mobile-menu {
                display: ${menuOpen ? 'flex' : 'none'};
                flex-direction: column;
                position: fixed;
                top: 64px;
                left: 0;
                width: 100%;
                background: rgba(10, 15, 30, 0.98);
                border-bottom: 1px solid #1E293B;
                padding: 16px 24px 24px;
                gap: 20px;
                z-index: 49;
              }
            }
            @media (min-width: 769px) {
              .hamburger { display: none !important; }
              .mobile-menu { display: none !important; }
            }
          `}</style>

          <div className="nav-inner" style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0',
          }}>
            {/* Name */}
            <span style={{
              color: '#F9FAFB',
              fontSize: '1.3rem',
              fontWeight: '700',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              Rucha <span style={{ color: '#06B6D4' }}>Dave</span>
            </span>

            {/* Desktop links */}
            <div className="nav-links-desktop" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  style={{
                    color: '#9CA3AF',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.target.style.color = '#06B6D4'}
                  onMouseLeave={e => e.target.style.color = '#9CA3AF'}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <span style={{ width: '24px', height: '2px', background: menuOpen ? '#06B6D4' : '#F9FAFB', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ width: '24px', height: '2px', background: '#F9FAFB', opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
              <span style={{ width: '24px', height: '2px', background: menuOpen ? '#06B6D4' : '#F9FAFB', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className="mobile-menu">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#9CA3AF',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        <div style={{ paddingTop: '0px' }}>
          <Home />
        </div>

      </div>
    </Router>
  );
}

export default App;
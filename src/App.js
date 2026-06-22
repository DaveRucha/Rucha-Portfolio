import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div style={{ background: '#0A0F1E', minHeight: '100vh' }}>

        {/* Navbar */}
        <nav style={{
          background: 'rgba(10, 15, 30, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #1E293B',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 120px',
        }}>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {/* Name */}
            <span style={{
              color: '#F9FAFB',
              fontSize: '1.3rem',
              fontWeight: '700',
              letterSpacing: '0.5px',
              cursor: 'pointer'
            }}>
              Rucha <span style={{ color: '#06B6D4' }}>Dave</span>
            </span>

            {/* Nav Links */}
            <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
              {['Banner', 'introduction', 'education', 'experience', 'skills', 'projects', 'contact'].map((section, i) => {
                const labels = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'];
                return (
                  <ScrollLink
                    key={section}
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    style={{
                      color: '#9CA3AF',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={e => e.target.style.color = '#06B6D4'}
                    onMouseLeave={e => e.target.style.color = '#9CA3AF'}
                  >
                    {labels[i]}
                  </ScrollLink>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div style={{ paddingTop: '0px' }}>
          <Home />
        </div>

      </div>
    </Router>
  );
}

export default App;
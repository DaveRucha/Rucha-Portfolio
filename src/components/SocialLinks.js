import React from 'react';

const SocialLinks = () => {
  return (
    <footer style={{
      background: '#0A0F1E',
      borderTop: '1px solid #1E293B',
      padding: '24px 120px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <span style={{ color: '#6B7280', fontSize: '0.85rem' }}>
        © 2026 Rucha Dave. Built with React.
      </span>
      <div style={{ display: 'flex', gap: '24px' }}>
        {[
          { label: 'GitHub', url: 'https://github.com/DaveRucha' },
          { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rucha-dave-386ab927a/' },
        ].map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#6B7280', fontSize: '0.85rem', textDecoration: 'none' }}
            onMouseEnter={e => { e.target.style.color = '#06B6D4'; }}
            onMouseLeave={e => { e.target.style.color = '#6B7280'; }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default SocialLinks;
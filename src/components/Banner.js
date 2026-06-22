import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const roles = [
  'Full Stack Developer',
  'React & TypeScript Engineer',
  'Data Engineer',
  '.NET Core Developer',
  'Python Automation Engineer',
];

const Banner = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    setCurrentRole(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <>
      <style>{`
       .banner-wrapper {
        background: #0A0F1E;
        height: calc(100vh - 64px);
        display: flex;
        align-items: center;
        border-bottom: 1px solid #1E293B;
        padding: 0 120px;
      }
      .banner-inner {
        width: 100%;
        display: grid;
        grid-template-columns: 1.1fr 0.7fr;
        align-items: center;
        gap: 80px;
      }
      .banner-left {}
      .banner-label {
        color: #06B6D4;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      .banner-name {
        font-size: clamp(3.5rem, 5.5vw, 5rem);
        font-weight: 700;
        color: #F9FAFB;
        line-height: 1.1;
        margin: 0 0 20px 0;
      }
      .banner-typing {
        font-size: clamp(1.3rem, 2vw, 1.8rem);
        color: #9CA3AF;
        margin-bottom: 32px;
        min-height: 2rem;
        display: flex;
        align-items: center;
      }
      .banner-btns {
        display: flex;
        gap: 14px;
        margin-bottom: 44px;
      }
      .banner-stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        width: 100%;
        gap: 12px;
      }
      .banner-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
      .banner-photo {
        width: 100%;
        max-width: 380px;
        aspect-ratio: 1;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
        border: 3px solid #06B6D4;
        box-shadow: 0 0 60px rgba(6,182,212,0.15);
      }
      .banner-social {
        display: flex;
        gap: 24px;
      }
      .banner-social a {
        color: #6B7280;
        font-size: 0.85rem;
        text-decoration: none;
        transition: color 0.2s;
      }
      .banner-social a:hover { color: #06B6D4; }
      @media (max-width: 900px) {
        .banner-wrapper { padding: 80px 32px 40px; }
        .banner-inner {
          grid-template-columns: 1fr;
          text-align: center;
        }
        .banner-right { order: -1; }
        .banner-btns { justify-content: center; }
        .banner-stats { grid-template-columns: repeat(2, 1fr); }
        .banner-social { justify-content: center; }
      }
      `}</style>

      <div className="banner-wrapper">
        <div className="banner-inner">

          {/* Left */}
          <div className="banner-left">
            <div className="banner-label">MS Computer Science · SDSU 2026</div>

            <h1 className="banner-name">
              Rucha Avinash<br />
              <span style={{ color: '#06B6D4' }}>Dave</span>
            </h1>

            <div className="banner-typing">
              <span>{currentRole}</span>
              <span className="typing-cursor" />
            </div>

            <div className="banner-btns">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-64}>
                <button className="btn-primary">Get In Touch</button>
              </ScrollLink>
              
                <a
                href={`${process.env.PUBLIC_URL}/Rucha-Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-outline">Resume</button>
              </a>
            </div>

            <div className="banner-stats">
              {[
                { num: '4+', label: 'Internships' },
                { num: '3.78', label: 'GPA' },
                { num: '100M+', label: 'Rows processed' },
                { num: '8M+', label: 'Companies analyzed' },
              ].map((stat, i) => (
                <div key={i} className="stat-box">
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="banner-right">
            <img
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt="Rucha Dave"
              className="banner-photo"
            />
            <div className="banner-social">
              {[
                { label: 'GitHub', url: 'https://github.com/DaveRucha' },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rucha-dave-386ab927a/' },
                { label: 'Portfolio', url: 'https://rucha-portfolio-psi.vercel.app/' },
              ].map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Banner;
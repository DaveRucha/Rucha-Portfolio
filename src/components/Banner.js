import React, { useEffect, useState, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const roles = [
  'Full Stack Developer',
  'React & TypeScript Engineer',
  'Data Engineer',
  '.NET Core Developer',
  'Python Automation Engineer',
];

const useCountUp = (target, duration = 2000, startCounting) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const isDecimal = target % 1 !== 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(2)) : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [startCounting, target, duration]);

  return count;
};

const StatBox = ({ num, label, suffix = '' }) => {
  const [startCounting, setStartCounting] = useState(false);
  const ref = useRef(null);

  const parseTarget = (n) => {
    if (typeof n === 'string') return parseFloat(n.replace(/[^0-9.]/g, ''));
    return n;
  };

  const target = parseTarget(num);
  const count = useCountUp(target, 1800, startCounting);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStartCounting(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const formatCount = () => {
    if (num === '3.77') return count.toFixed(2);
    return Math.floor(count);
  };

  return (
    <div ref={ref} className="stat-box">
      <div className="stat-num">{formatCount()}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const particles = [...Array(25)].map((_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  width: `${(i % 4) + 3}px`,
  height: `${(i % 4) + 3}px`,
  duration: `${(i % 8) + 6}s`,
  delay: `${(i % 6)}s`,
}));

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
          position: relative;
          overflow: hidden;
        }
        .banner-bg {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        .banner-content {
          position: relative;
          z-index: 1;
          width: 100%;
        }
        .banner-inner {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 80px;
        }
        .banner-label {
          color: #06B6D4;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .banner-name {
          font-size: clamp(2.8rem, 4vw, 3.8rem);
          font-weight: 700;
          color: #F9FAFB;
          line-height: 1.1;
          margin: 0 0 20px 0;
        }
        .banner-typing {
          font-size: 1.2rem;
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
        .banner-social { display: flex; gap: 24px; }
        .banner-social a {
          color: #6B7280;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .banner-social a:hover { color: #06B6D4; }
        .particle {
          position: absolute;
          background: #06B6D4;
          border-radius: 50%;
          opacity: 0;
          animation: floatUp linear infinite;
          box-shadow: 0 0 6px 2px rgba(6, 182, 212, 0.6);
        }
        @keyframes floatUp {
          0% { transform: translateY(100vh); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.15; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        @media (max-width: 900px) {
          .banner-wrapper { padding: 80px 32px 40px; height: auto; min-height: 100vh; }
          .banner-inner { grid-template-columns: 1fr; text-align: center; }
          .banner-right { order: -1; }
          .banner-btns { justify-content: center; }
          .banner-stats { grid-template-columns: repeat(2, 1fr); }
          .banner-social { justify-content: center; }
        }
      `}</style>

      <div className="banner-wrapper">

        {/* Particles */}
        <div className="banner-bg">
          {particles.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                left: p.left,
                top: p.top,
                width: p.width,
                height: p.height,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="banner-content">
          <div className="banner-inner">

            {/* Left */}
            <div className="banner-left">
              <div className="banner-label">MS Computer Science · SDSU 2026</div>

              <h1 className="banner-name">
                Rucha Avinash<br />
                <span style={{ color: '#06B6D4' }}>Dave</span>
              </h1>

              <div className="banner-typing">
                <span style={{ whiteSpace: 'nowrap' }}>{currentRole}</span>
                <span className="typing-cursor" />
              </div>

              <div className="banner-btns">
                <ScrollLink to="contact" smooth={true} duration={500} offset={-64}>
                  <button className="btn-primary">Get In Touch</button>
                </ScrollLink>
                <a href={`${process.env.PUBLIC_URL}/Rucha-Resume.pdf`} target="_blank" rel="noopener noreferrer">
                  <button className="btn-outline">Resume</button>
                </a>
              </div>

              <div className="banner-stats">
                <StatBox num="3" suffix="+" label="Internships" />
                <StatBox num="3.77" suffix="" label="GPA" />
                <StatBox num="100" suffix="M+" label="Rows of data processed" />
                <StatBox num="8" suffix="M+" label="Company records cleaned" />
              </div>
            </div>

            {/* Right */}
            <div className="banner-right">
              <img
                src={`${process.env.PUBLIC_URL}/profile.jpg`}
                alt="Rucha Dave"
                className="banner-photo"
                loading="lazy"
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
      </div>
    </>
  );
};

export default Banner;
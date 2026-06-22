import React from 'react';
import FadeIn from './FadeIn';

const Introduction = () => {
  return (
    <>
      <style>{`
        .about-wrapper {
          background: #0A0F1E;
          padding: 100px 120px;
          border-bottom: 1px solid #1E293B;
        }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-header { margin-bottom: 32px; }
        .about-text {
          color: #9CA3AF;
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .about-text strong { color: #F9FAFB; font-weight: 600; }
        .about-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 32px;
        }
        .about-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .about-highlight-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #06B6D4;
          margin-top: 7px;
          flex-shrink: 0;
        }
        .about-highlight-text {
          color: #9CA3AF;
          font-size: 0.875rem;
          line-height: 1.5;
        }
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .about-card {
          background: #111827;
          border: 1px solid #1E293B;
          border-radius: 12px;
          padding: 20px 24px;
          transition: border-color 0.2s ease;
        }
        .about-card:hover { border-color: #06B6D4; }
        .about-card-label {
          color: #06B6D4;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .about-card-value {
          color: #F9FAFB;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .about-card-sub {
          color: #6B7280;
          font-size: 0.82rem;
          margin-top: 3px;
        }
        @media (max-width: 768px) {
          .about-wrapper { padding: 60px 24px; }
          .about-inner { grid-template-columns: 1fr; gap: 40px; }
          .about-highlights { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="about-wrapper" id="introduction">
        <div className="about-inner">
          <div>
            <FadeIn direction="up">
              <div className="about-header">
                <div className="section-label">Who I am</div>
                <h2 className="section-heading">About Me</h2>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p className="about-text">
                I'm a <strong>CS graduate from SDSU</strong> building scalable full-stack apps and data pipelines. I turn complex problems into clean, efficient solutions — from Chrome extensions that automate job applications to distributed pipelines processing 100M+ rows.
              </p>
              <p className="about-text">
                Currently looking for <strong>full-stack or data engineering roles</strong> where I can ship real products and grow fast.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="about-highlights">
                {[
                  'Full-stack web development',
                  'Data engineering & ETL pipelines',
                  'Browser automation & scraping',
                  'REST API design & integration',
                  'SQL & database design',
                  'CI/CD & deployment workflows',
                ].map((item, i) => (
                  <div key={i} className="about-highlight-item">
                    <div className="about-highlight-dot" />
                    <span className="about-highlight-text">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="about-right">
            {[
              { label: 'Education', value: 'MS Computer Science', sub: 'San Diego State University · GPA 3.78' },
              { label: 'Status', value: 'Open to Work', sub: 'F-1 OPT · Requires H-1B Sponsorship' },
              { label: 'Location', value: 'San Diego, CA', sub: 'Open to relocation anywhere in the US' },
              { label: 'Experience', value: '4 Internships', sub: 'Full Stack · Data Engineering · Automation' },
              { label: 'Currently building', value: 'Job search automation tools', sub: 'React · Python · Chrome Extension MV3' },
            ].map((card, i) => (
              <FadeIn key={i} direction="left" delay={i * 0.08}>
                <div className="about-card">
                  <div className="about-card-label">{card.label}</div>
                  <div className="about-card-value">{card.value}</div>
                  <div className="about-card-sub">{card.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
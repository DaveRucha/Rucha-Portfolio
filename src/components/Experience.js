import React from 'react';
import FadeIn from './FadeIn';

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Reborn Tech LLC',
    location: 'Los Angeles, CA',
    dates: 'Aug 2025 – Oct 2025',
    stack: ['React', 'TypeScript', 'Chrome Extension MV3', 'Playwright', 'Python'],
    bullets: [
      'Built Chrome Extension (MV3) autofill system with fuzzy field matching, improving job application completion rates by 35%.',
      'Engineered multi-step form support reducing form failures by 30% across complex ATS platforms.',
      'Developed config-driven Python and Playwright scraping pipeline across 5+ career portals.',
    ],
  },
  {
    role: 'Graduate Assistant',
    company: 'San Diego State University',
    location: 'San Diego, CA',
    dates: 'Sep 2024 – May 2026',
    stack: ['Python', 'Pandas', 'ETL Pipelines', 'Parquet', 'Fuzzy Matching'],
    bullets: [
      'Designed ETL pipelines processing 100M+ rows of financial datasets with schema validation and batch processing.',
      'Improved data comparison efficiency by 40% using fuzzy-matching automation across 8M+ records.',
      'Applied LLM-assisted workflows with Claude AI and ChatGPT to automate repetitive data-cleaning tasks.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Mokshit Infotech',
    location: 'Surat, India',
    dates: 'Jan 2024 – Apr 2024',
    stack: ['.NET Core', 'REST APIs', 'SQL Server', 'Postman'],
    bullets: [
      'Optimized backend performance by 25% building scalable .NET Core REST APIs for 1,000+ organizations.',
      'Improved data integrity by designing normalized SQL schemas for transactional workflows.',
    ],
  },
  {
    role: 'React.js Developer Intern',
    company: 'Tatvasoft',
    location: 'Ahmedabad, India',
    dates: 'Jul 2023 – Aug 2023',
    stack: ['React.js', 'REST APIs', 'Agile'],
    bullets: [
      'Built transaction system serving 500+ users covering authentication, cart, and checkout workflows.',
      'Increased engagement by 15% through frontend performance optimization across sprint cycles.',
    ],
  },
];

const Experience = () => {
  return (
    <>
      <style>{`
        .exp-wrapper {
          background: #0A0F1E;
          padding: 100px 120px;
          border-bottom: 1px solid #1E293B;
        }
        .exp-header { margin-bottom: 60px; }
        .timeline {
          position: relative;
          padding-left: 32px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: #1E293B;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 48px;
        }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-dot {
          position: absolute;
          left: -38px;
          top: 6px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #06B6D4;
          border: 2px solid #0A0F1E;
          box-shadow: 0 0 10px rgba(6,182,212,0.5);
        }
        .timeline-card {
          background: #111827;
          border: 1px solid #1E293B;
          border-radius: 12px;
          padding: 28px;
          transition: border-color 0.2s ease;
        }
        .timeline-card:hover { border-color: #06B6D4; }
        .timeline-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .timeline-role {
          color: #F9FAFB;
          font-size: 1.15rem;
          font-weight: 600;
        }
        .timeline-dates {
          color: #06B6D4;
          font-size: 0.85rem;
          font-weight: 500;
          white-space: nowrap;
        }
        .timeline-company {
          color: #9CA3AF;
          font-size: 0.9rem;
          margin-bottom: 16px;
        }
        .timeline-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .timeline-tag {
          background: #1E293B;
          color: #06B6D4;
          border: 1px solid #1E3A5F;
          border-radius: 4px;
          padding: 3px 10px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .timeline-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .timeline-bullets li {
          color: #9CA3AF;
          font-size: 0.9rem;
          line-height: 1.6;
          padding-left: 16px;
          position: relative;
        }
        .timeline-bullets li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #06B6D4;
        }
        @media (max-width: 768px) {
          .exp-wrapper { padding: 60px 24px; }
          .timeline { padding-left: 20px; }
          .timeline-dot { left: -26px; }
          .timeline-top { flex-direction: column; }
        }
      `}</style>

      <div className="exp-wrapper" id="experience">
        <FadeIn direction="up">
          <div className="exp-header">
            <div className="section-label">Where I've worked</div>
            <h2 className="section-heading">Experience</h2>
          </div>
        </FadeIn>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-top">
                    <span className="timeline-role">{exp.role}</span>
                    <span className="timeline-dates">{exp.dates}</span>
                  </div>
                  <div className="timeline-company">{exp.company} · {exp.location}</div>
                  <div className="timeline-stack">
                    {exp.stack.map((tag, j) => (
                      <span key={j} className="timeline-tag">{tag}</span>
                    ))}
                  </div>
                  <ul className="timeline-bullets">
                    {exp.bullets.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
import React from 'react';
import FadeIn from './FadeIn';

const Education = () => {
  return (
    <>
      <style>{`
        .edu-wrapper {
          background: #111827;
          padding: 100px 120px;
          border-bottom: 1px solid #1E293B;
        }
        .edu-header { margin-bottom: 60px; }
        .edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .edu-card {
          background: #0A0F1E;
          border: 1px solid #1E293B;
          border-radius: 12px;
          padding: 32px;
          transition: border-color 0.2s ease;
        }
        .edu-card:hover { border-color: #06B6D4; }
        .edu-degree {
          color: #06B6D4;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .edu-school {
          color: #F9FAFB;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .edu-major {
          color: #9CA3AF;
          font-size: 0.95rem;
          margin-bottom: 16px;
        }
        .edu-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .edu-meta-item { display: flex; flex-direction: column; gap: 2px; }
        .edu-meta-label {
          color: #6B7280;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .edu-meta-value {
          color: #F9FAFB;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .edu-courses-label {
          color: #06B6D4;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .edu-courses {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .edu-course-tag {
          background: #1E293B;
          color: #9CA3AF;
          border-radius: 4px;
          padding: 4px 10px;
          font-size: 0.8rem;
        }
        @media (max-width: 768px) {
          .edu-wrapper { padding: 60px 24px; }
          .edu-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="edu-wrapper" id="education">
        <FadeIn direction="up">
          <div className="edu-header">
            <div className="section-label">Academic background</div>
            <h2 className="section-heading">Education</h2>
          </div>
        </FadeIn>

        <div className="edu-grid">
          <FadeIn direction="up" delay={0.1}>
            <div className="edu-card">
              <div className="edu-degree">Master of Science</div>
              <div className="edu-school">San Diego State University</div>
              <div className="edu-major">Computer Science</div>
              <div className="edu-meta">
                <div className="edu-meta-item">
                  <span className="edu-meta-label">Period</span>
                  <span className="edu-meta-value">Aug 2024 – May 2026</span>
                </div>
                <div className="edu-meta-item">
                  <span className="edu-meta-label">GPA</span>
                  <span className="edu-meta-value">3.77 / 4.00</span>
                </div>
                <div className="edu-meta-item">
                  <span className="edu-meta-label">Location</span>
                  <span className="edu-meta-value">San Diego, CA</span>
                </div>
              </div>
              <div className="edu-courses-label">Relevant Coursework</div>
              <div className="edu-courses">
                {['Data Science', 'Big Data Tools', 'Machine Learning', 'Database Theory', 'Computer Networks', 'Algorithm Design', 'Web Development'].map((c, i) => (
                  <span key={i} className="edu-course-tag">{c}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="edu-card">
              <div className="edu-degree">Bachelor of Engineering</div>
              <div className="edu-school">Gujarat Technological University</div>
              <div className="edu-major">Computer Engineering</div>
              <div className="edu-meta">
                <div className="edu-meta-item">
                  <span className="edu-meta-label">Period</span>
                  <span className="edu-meta-value">Jun 2020 – May 2024</span>
                </div>
                <div className="edu-meta-item">
                  <span className="edu-meta-label">GPA</span>
                  <span className="edu-meta-value">3.91 / 4.00</span>
                </div>
                <div className="edu-meta-item">
                  <span className="edu-meta-label">Location</span>
                  <span className="edu-meta-value">Ahmedabad, India</span>
                </div>
              </div>
              <div className="edu-courses-label">Relevant Coursework</div>
              <div className="edu-courses">
                {['Data Structures', 'AI', 'Cloud Computing', 'Software Engineering', 'Web Programming'].map((c, i) => (
                  <span key={i} className="edu-course-tag">{c}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default Education;
import React from 'react';
import FadeIn from './FadeIn';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    skills: ['.NET Core', 'C#', 'REST APIs', 'Python', 'Playwright', 'ASP.NET Core MVC'],
  },
  {
    category: 'Data & Scripting',
    skills: ['SQL Server', 'Pandas', 'NumPy', 'ETL Pipelines', 'Fuzzy Matching', 'PySpark'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'CI/CD', 'Postman', 'Jira', 'Vercel'],
  },
];

const Skills = () => {
  return (
    <>
      <style>{`
        .skills-wrapper {
          background: #0A0F1E;
          padding: 100px 120px;
          border-bottom: 1px solid #1E293B;
        }
        .skills-header {
          margin-bottom: 60px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .skill-group {
          background: #111827;
          border: 1px solid #1E293B;
          border-radius: 12px;
          padding: 28px;
          transition: border-color 0.2s ease;
        }
        .skill-group:hover {
          border-color: #06B6D4;
        }
        .skill-group-title {
          color: #06B6D4;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #1E293B;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-tag {
          background: #1E293B;
          color: #E2E8F0;
          border: 1px solid #334155;
          border-radius: 6px;
          padding: 6px 14px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: default;
        }
        .skill-tag:hover {
          border-color: #06B6D4;
          color: #06B6D4;
          background: rgba(6, 182, 212, 0.08);
        }
        @media (max-width: 768px) {
          .skills-wrapper { padding: 60px 24px; }
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="skills-wrapper" id="skills">

        <FadeIn direction="up">
          <div className="skills-header">
            <div className="section-label">What I work with</div>
            <h2 className="section-heading">Skills</h2>
          </div>
        </FadeIn>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="skill-group">
                <div className="skill-group-title">{group.category}</div>
                <div className="skill-tags">
                  {group.skills.map((skill, j) => (
                    <span key={j} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </>
  );
};

export default Skills;
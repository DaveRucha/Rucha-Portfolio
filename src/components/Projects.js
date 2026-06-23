import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const projects = [
  {
    title: 'PackFoodReady2Go',
    url: 'https://github.com/DaveRucha/PackFoodReady2Go',
    image: `${process.env.PUBLIC_URL}/packfood.png`,
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'Stripe'],
    description: 'Full-stack e-commerce platform with 15+ modules including cart, checkout, admin dashboard, and Stripe payment integration supporting 100+ weekly transactions.',
    bullets: [
      'Designed normalized SQL Server schemas with 17+ tables and Repository Pattern',
      'Integrated Stripe for end-to-end payment processing across 250+ products',
    ],
  },
  {
    title: 'Music Era Discovery',
    url: 'https://github.com/DaveRucha/music-era-discovery-pyspark',
    image: `${process.env.PUBLIC_URL}/music.png`,
    tags: ['PySpark 4.0', 'MLlib', 'K-Means', 'PCA', 'Matplotlib'],
    description: 'Distributed Big Data pipeline processing 577,018 Spotify songs, independently rediscovered the 1960s–70s music electrification shift without labeled data.',
    bullets: [
      'Built K-Means clustering pipeline across 9 audio features using PySpark MLlib',
      'Selected optimal K using Silhouette Score (0.36) with data-driven decision making',
    ],
  },
  {
    title: 'AirSlides',
    url: 'https://github.com/DaveRucha/AirSlides',
    image: `${process.env.PUBLIC_URL}/airslides.png`,
    tags: ['Python', 'OpenCV', 'Mediapipe', 'OCR', 'Text-to-Speech'],
    description: 'Real-time gesture recognition pipeline classifying 6 gesture classes from live webcam input for touchless slide navigation with OCR-powered audio output.',
    bullets: [
      'Improved gesture detection accuracy by 30% through feature extraction and preprocessing',
      'Integrated pytesseract OCR converting 100+ slide elements per session into audio',
    ],
  },
  {
    title: 'React Portfolio Website',
    url: 'https://github.com/DaveRucha/Rucha-Portfolio',
    image: `${process.env.PUBLIC_URL}/portfolio.png`,
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'GitHub Actions', 'Vercel'],
    description: 'Component-based portfolio with scroll animations, Intersection Observer API, CSS custom properties design system, and automated CI/CD pipeline.',
    bullets: [
      'Implemented scroll-triggered animations using Framer Motion Intersection Observer',
      'Achieved 98/94/100/92 Lighthouse scores across Performance, Accessibility, Best Practices, SEO',
    ],
  },
];

const Projects = () => {
  return (
    <>
      <style>{`
        .proj-wrapper {
          background: #0A0F1E;
          padding: 100px 120px;
          border-bottom: 1px solid #1E293B;
        }
        .proj-header { margin-bottom: 60px; }
        .proj-subtitle { color: #9CA3AF; font-size: 1rem; margin-top: 8px; }
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }
        .proj-card {
          background: #111827;
          border: 1px solid #1E293B;
          border-radius: 12px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .proj-card:hover {
          border-color: #06B6D4;
          box-shadow: 0 0 24px rgba(6,182,212,0.12);
        }
        .proj-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          object-position: top;
          border-bottom: 1px solid #1E293B;
          transition: opacity 0.2s ease;
        }
        .proj-card:hover .proj-image {
          opacity: 0.85;
        }
        .proj-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .proj-title { color: #F9FAFB; font-size: 1.15rem; font-weight: 700; }
        .proj-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .proj-tag {
          background: #1E293B;
          color: #06B6D4;
          border: 1px solid #1E3A5F;
          border-radius: 4px;
          padding: 3px 10px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .proj-desc { color: #9CA3AF; font-size: 0.88rem; line-height: 1.6; }
        .proj-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .proj-bullets li {
          color: #6B7280;
          font-size: 0.82rem;
          line-height: 1.5;
          padding-left: 14px;
          position: relative;
        }
        .proj-bullets li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #06B6D4;
        }
        .proj-link {
          color: #06B6D4;
          font-size: 0.85rem;
          font-weight: 600;
          margin-top: auto;
        }
        .proj-more { display: flex; justify-content: center; }
        .proj-more-btn {
          background: #06B6D4;
          color: #0A0F1E;
          padding: 12px 36px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .proj-more-btn:hover { background: #0891B2; }
        @media (max-width: 768px) {
          .proj-wrapper { padding: 60px 24px; }
          .proj-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="proj-wrapper" id="projects">
        <FadeIn direction="up">
          <div className="proj-header">
            <div className="section-label">What I've built</div>
            <h2 className="section-heading">Projects</h2>
            <p className="proj-subtitle">Click any card to view the source code on GitHub.</p>
          </div>
        </FadeIn>

        <div className="proj-grid">
          {projects.map((project, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-card"
                whileHover={{ y: -4 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="proj-image"
                  loading="lazy"
                />
                <div className="proj-body">
                  <div className="proj-title">{project.title}</div>
                  <div className="proj-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                  <p className="proj-desc">{project.description}</p>
                  <ul className="proj-bullets">
                    {project.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <span className="proj-link">View on GitHub →</span>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="proj-more">
            <motion.a
              href="https://github.com/DaveRucha?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-more-btn"
            >
              More on GitHub
              </motion.a>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Projects;
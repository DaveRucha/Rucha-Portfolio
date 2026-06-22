import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const form = event.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then(response => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert('There was an error submitting the form');
        }
      })
      .catch(() => alert('There was an error submitting the form'))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <style>{`
        .contact-wrapper {
          background: #111827;
          padding: 100px 120px;
          border-bottom: 1px solid #1E293B;
        }
        .contact-header {
          margin-bottom: 60px;
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .contact-left p {
          color: #9CA3AF;
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 40px;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-link-item {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: #9CA3AF;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          padding: 14px 18px;
          background: #0A0F1E;
          border: 1px solid #1E293B;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .contact-link-item:hover {
          border-color: #06B6D4;
          color: #06B6D4;
        }
        .contact-link-icon {
          color: #06B6D4;
          font-size: 1.1rem;
          width: 20px;
          text-align: center;
        }
        .contact-form {
          background: #0A0F1E;
          border: 1px solid #1E293B;
          border-radius: 12px;
          padding: 36px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          color: #9CA3AF;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }
        .form-input {
          width: 100%;
          background: #111827;
          border: 1px solid #1E293B;
          border-radius: 6px;
          padding: 12px 16px;
          color: #F9FAFB;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }
        .form-input:focus {
          border-color: #06B6D4;
        }
        .form-input::placeholder {
          color: #4B5563;
        }
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-submit {
          width: 100%;
          background: #06B6D4;
          color: #0A0F1E;
          border: none;
          border-radius: 6px;
          padding: 14px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
          margin-top: 8px;
        }
        .form-submit:hover { background: #0891B2; }
        .form-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .success-message {
          text-align: center;
          padding: 40px 20px;
        }
        .success-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        .success-title {
          color: #F9FAFB;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .success-sub {
          color: #9CA3AF;
          font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          .contact-wrapper { padding: 60px 24px; }
          .contact-inner { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>

      <div className="contact-wrapper" id="contact">
        <FadeIn direction="up">
          <div className="contact-header">
            <div className="section-label">Get in touch</div>
            <h2 className="section-heading">Contact Me</h2>
          </div>
        </FadeIn>
        <div className="contact-header">
          <div className="section-label">Get in touch</div>
          <h2 className="section-heading">Contact Me</h2>
        </div>

        <div className="contact-inner">
          <FadeIn direction="right">
            <div className="contact-left">
              <p>
                I'm currently open to full-stack and data engineering roles. 
                Whether you have a position in mind, want to collaborate, or 
                just want to say hi, my inbox is always open.
              </p>

            <div className="contact-links">
              <a href="mailto:ruchadave04@gmail.com" className="contact-link-item">
                <span className="contact-link-icon">✉</span>
                ruchadave04@gmail.com
              </a>
              <a href="https://github.com/DaveRucha" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <span className="contact-link-icon">⌥</span>
                github.com/DaveRucha
              </a>
              <a href="https://www.linkedin.com/in/rucha-dave-386ab927a/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <span className="contact-link-icon">in</span>
                linkedin.com/in/rucha-dave
              </a>
              <a href={`${process.env.PUBLIC_URL}/Rucha-Resume.pdf`} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <span className="contact-link-icon">↓</span>
                Download Resume
              </a>
            </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="left">
            <div className="contact-form">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <div className="success-title">Message sent!</div>
                  <div className="success-sub">I'll get back to you as soon as possible.</div>
                </div>
              ) : (
                <form action="https://formspree.io/f/xdknvvej" method="POST" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" required placeholder="Your name" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" required placeholder="your@email.com" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea name="message" required placeholder="What's on your mind?" className="form-input form-textarea" />
                  </div>
                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default Contact;
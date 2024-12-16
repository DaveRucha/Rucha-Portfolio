// SocialLinks.js
import React from 'react';

const SocialLinks = () => {
  return (
    <footer className="p-4 bg-charcoal text-white text-center">
      <h2 className="text-2xl font-bold text-orange">Connect with Me</h2>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/DaveRucha" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/rucha-dave-386ab927a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default SocialLinks;

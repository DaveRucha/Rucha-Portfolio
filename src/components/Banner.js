// src/components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold text-white">Rucha Avinash Dave</h1>
        <p className="mt-4 text-xl text-gray-100">Full Stack Developer | Software Engineer</p>
        <a
          href="#contact"
          className="mt-8 inline-block px-6 py-3 bg-white text-purple-500 font-bold rounded-full shadow-lg"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Banner;

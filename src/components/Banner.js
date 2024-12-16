import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="flex items-center justify-center text-left px-10 py-16 " style={{ backgroundColor: '#B85042' }}>
      {/* Container for Banner Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center ml-25">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 w-full">
          {/* Hi Greeting with Wave GIF */}
          <div className="flex items-center mb-1">
            <img
              src={`${process.env.PUBLIC_URL}/hi.png`}
              alt="Waving hand"
              className="ml-1"
              style={{ width: '170px', height: '170px' }}
            />
          </div>

          <h1 className="text-5xl font-bold mb-4" style={{ color: '#E7E8D1' }}>
            Rucha Avinash Dave
          </h1>
          <p className="text-xl mb-2" style={{ color: '#E7E8D1' }}>
            Full Stack Developer | Web & Mobile Application Development
          </p>

          {/* Animated Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl mt-4 font-medium"
            style={{ color: '#E7E8D1' }}
          >
            Driven by code, inspired by innovation.
          </motion.p>

          {/* Buttons */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-6 py-3 font-bold rounded-full shadow-lg"
              style={{ backgroundColor: '#A7BEAE', color: '#B85042' }}
            >
              Get In Touch
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/Resume-Rucha.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 ml-4 font-bold rounded-full shadow-lg"
              style={{ backgroundColor: '#A7BEAE', color: '#B85042' }}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side: About Me GIF */}
        <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
          <img
            src={`${process.env.PUBLIC_URL}/AboutMeBanner.gif`}
            alt="About Me GIF"
            style={{ width: '500px', height: 'auto' }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

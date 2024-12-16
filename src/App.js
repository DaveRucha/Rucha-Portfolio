import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="p-4 bg-charcoal text-white flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50">
          {/* Your Name on the Left */}
          <h1 className="text-2xl font-bold hover:text-orange cursor-pointer"
          style={{ color: '#B85042' }}
          >Rucha Dave</h1>

          {/* Links on the Right */}
          <div className="flex space-x-6 font-bold" style={{ color: '#B85042' }}>
            <ScrollLink
              to="Banner"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-orange hover:scale-110 transition-all duration-300"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="introduction"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-orange hover:scale-110 transition-all duration-300"
            >
              About
            </ScrollLink>
            <ScrollLink 
              to="education" 
              smooth={true} 
              duration={500} 
              offset={-70}
            >
              Education
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-orange hover:scale-110 transition-all duration-300"
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-orange hover:scale-110 transition-all duration-300"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-orange hover:scale-110 transition-all duration-300"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-orange hover:scale-110 transition-all duration-300"
            >
              Contact
            </ScrollLink>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-16"> {/* Adjusted padding to account for fixed navbar height */}
          <Home />
        </div>
      </div>
    </Router>
  );
}

export default App;

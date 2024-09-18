// src/Pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../Pages/Contact';

const Home = () => {
    return (
      <div>  
        <section id="Banner">
          <Banner />
        </section>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
        <Projects />
      </section>
        <section id="contact">
            <Contact />
        </section>
      </div>
    );
  };
  

export default Home;


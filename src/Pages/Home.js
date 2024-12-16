// src/Pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../Pages/Contact';
import Education from '../components/Education';

const Home = () => {
  return (
    <div>
      <section id="Banner">
        <Banner />
      </section>
      <hr/>
      <section id="introduction">
        <Introduction />
      </section>
      <hr/>
      <section id="education">
        <Education />
      </section>
      <hr/>
      <section id="experience">
        <Experience />
      </section>
      <hr/>
      <section id="skills">
        <Skills />
      </section>
      <hr/>
      <section id="projects">
        <Projects />
      </section>
      <hr/>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};


export default Home;


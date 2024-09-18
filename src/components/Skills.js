// src/components/Skills.js
import React from 'react';

const skills = ['Java', 'React', 'Python', '.NET', 'HTML', 'CSS', 'PostgreSQL', 'Firebase'];

const Skills = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">Skills & Technologies</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <p className="text-xl font-medium text-gray-700">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

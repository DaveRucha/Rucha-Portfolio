// src/components/Experience.js
import React from 'react';

const Experience = () => {
  const internships = [
    {
      company: 'Mokshit Infotech',
      role: 'Web Developer',
      description: 'Worked on a sports management platform for efficient student enrollment.',
    },
    {
      company: 'Tatvasoft',
      role: 'React.JS Intern',
      description: 'Developed a Book Store Application with React JS and integrated shopping cart.',
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">Internship Experience</h2>
        <div className="mt-10 flex flex-col space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-2xl font-semibold text-purple-600">{internship.role}</h3>
              <p className="mt-2 text-lg text-gray-700">{internship.company}</p>
              <p className="mt-4 text-gray-600">{internship.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

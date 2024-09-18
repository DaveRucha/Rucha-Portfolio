// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Digital Vehicle Maintenance',
    description: 'An Android app for real-time vehicle servicing and bookings.',
  },
  {
    title: 'Laptop Shop Management System',
    description: 'A web app to manage laptop inventory using Java and MySQL.',
  },
];

const Projects = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">Projects</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-purple-600">{project.title}</h3>
              <p className="mt-4 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

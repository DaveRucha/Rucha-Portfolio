import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'San Diego State University',
      role: 'Graduate Assistant',
      location: 'San Diego, CA, USA',
      dates: 'September 2024 - Present',
      description: [
        'Assisted professor in research by analyzing large datasets from 2,800+ companies, extracting key insights that contributed to research outcomes.',
        'Created and executed machine learning scripts, automating data processing and improving task efficiency by 40%.',
      ],
    },
    {
      company: 'Mokshit Infotech',
      role: 'Web Developer Intern',
      location: 'Surat, GJ, India',
      dates: 'January 2024 - April 2024',
      description: [
        'Optimized the sports web application "Allies Sports", serving over 1,000 sports organizations, providing an efficient management platform for handling student enrollments, event scheduling, and curriculum management.',
        'Engineered back-end solutions that boosted processing speed by 25%, accommodating a 20% increase in user volume.',
        'Collaborated with a cross-functional team using .NET Core, Web API, Jira, Postman, and Power BI to deliver a seamless experience for students, parents, and staff, improving communication skills.',
      ],
    },
    {
      company: 'Tatvasoft',
      role: 'React.JS Developer Intern',
      location: 'Ahmedabad, GJ, India',
      dates: 'July 2023 - August 2023',
      description: [
        'Developed a Book Store Application using React.js, enabling 500+ users to search, select, and purchase books.',
        'Introduced features like a shopping cart, user login, and streamlined account setup, reducing checkout time by one-fifth and increasing user retention by 15%.',
        'Compiled detailed reports, conducted research, and gathered insights, leading to enhancements in functionality and user satisfaction.',
      ],
    },
  ];

  return (
    <div className="py-20 bg-charcoal">
      <div className="container mx-auto">
        <h2 className="heading-3d text-center text-2xl mb-10" data-text="Professional Experience">
          Experience
        </h2>
        <div className="mt-10 flex flex-col space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-lg"
              style={{ backgroundColor: '#A7BEAE', color: '#B85042' }}
            >
              <h3 className="text-2xl font-bold text-orange mb-2">
                {experience.role} at {experience.company}
              </h3>
              
              {/* Location with Icon */}
              <p className="flex items-center text-lg text-charcoal">
                <FaMapMarkerAlt className="mr-2" /> {experience.location}
              </p>
              
              {/* Date with Icon */}
              <p className="flex items-center text-lg text-charcoal italic mb-4">
                <FaCalendarAlt className="mr-2" /> {experience.dates}
              </p>
              
              {/* Description */}
              <ul className="list-disc list-inside space-y-2 mt-2">
                {experience.description.map((point, idx) => (
                  <li key={idx} className="text-charcoal text-md">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
